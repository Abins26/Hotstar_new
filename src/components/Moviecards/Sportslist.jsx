import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
// import { IoStarOutline } from "react-icons/io5";

import React, { useState, useEffect } from "react";
import "../style/sportslist.css";

function SeriesList () {
  const [imageUrls, setImageUrls] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  

  const getData = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/movies/family");
      // const resp = await fetch("https://api.sampleapis.com/cartoons/cartoons2D");

      const movies = await resp.json();

      // Extract image urls
      const urls = movies.map((movie) => movie.posterURL);

      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLeftScroll = () => {
    setScrollPosition((prevPosition) => Math.max(0, prevPosition - 5));
  };

  const handleRightScroll = () => {
    setScrollPosition((prevPosition) =>
      Math.min(prevPosition + 5, imageUrls.length - 5)
    );
  };

  return (
    <>
      <div className="sportscontainer flex flex-row ">
      <h1 className="sportshead">Animation Movies</h1>

      {/* left arrow */}
        <button className="sportsleft-button   z-10" onClick={handleLeftScroll}>
          <MdKeyboardArrowLeft style = {{ fontSize:"30px"}}/></button>

          {imageUrls.slice(scrollPosition, scrollPosition + 6).map((url, index) => (
          <div
            key={index + scrollPosition} className="sportscard"
            onMous8eEnter={() => setHoveredIndex(index + scrollPosition)}
            onMouseLeave={() => setHoveredIndex(null)} >
             {/* <div className="icon-overlay">
              <IoStarOutline className="star-icon" />
            </div> */}
              {/* image */}
            <img src={url} alt={`Movie Poster ${index}`} className="sportsimg" height="200px" width="230px" />

            {hoveredIndex === index + scrollPosition && (
              <div className="sportsoverlay">
                <div style={{ display: "flex" }}>
                  <button className="sportsbutton">
                    <h3 style={{ fontWeight: "bold", fontSize: 8 }}>Watch Now</h3>
                  </button>
                  <button className="sportssmall-button">+</button>
                </div>

                <p className="sportssmall-text">2024-2h.12m-English-U/A16+</p>

                <p className="sportstext">
                The plot revolves around Sachin,
                a student who works in a food joint in Hyderabad,and Reenu, 
                an IT employee who recently moved to the city,
                as they fall in love and face various challenges in their relationship.</p>
              </div>
            )}
          </div>
        ))}
          {/* right arrow */}
        <button className="sportsright-button   z-20" onClick={handleRightScroll}>    {/* bg-gradient-to-l from-black to-transparent */}
          <MdKeyboardArrowRight style={{fontSize:"30px"}}/></button>
      </div>
    </>
  );
};

export default SeriesList;
