import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
import React, { useState, useEffect } from "react";
import "../style/SeriesList.css";
import { Link } from "react-router-dom";


function SeriesList () {
  const [imageUrls, setImageUrls] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const getData = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/movies/drama");
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
    setScrollPosition((prevPosition) => Math.max(0, prevPosition - 7));
  };

  const handleRightScroll = () => {
    setScrollPosition((prevPosition) =>
      Math.min(prevPosition + 6, imageUrls.length - 7)
    );
  };

  return (
    <>
      <div className="seriescontainer flex flex-row ">
        <h1 className="Serieshead">Latest Release</h1>
        <button className="left-button" onClick={handleLeftScroll}> <MdKeyboardArrowLeft style = {{ fontSize:"30px"}}/></button>
        {imageUrls.slice(scrollPosition, scrollPosition + 9).map((url, index) => (
          <div
            key={index + scrollPosition} className="seriescard"
            onMouseEnter={() => setHoveredIndex(index + scrollPosition)}
            onMouseLeave={() => setHoveredIndex(null)} >
            <img src={url} alt={`Movie Poster ${index}`} className="seriesimg" height="200px" width="150px" />

            {hoveredIndex === index + scrollPosition && (
              <Link to={`/details/${index+1}`}>
              <div className="seriesoverlay">
                <div style={{ display: "flex" }}>
                    <button className="seriesbutton">
                    <h3 style={{ fontWeight: "bold", fontSize: 8 }}>Watch Now</h3>
                  </button>
                  <button className="small-button">+</button>
                </div>

                <p className="small-text">2024-2h.12m-English-U/A16+</p>

                <p className="seriestext">
                The plot revolves around Sachin,
                a student who works in a food joint in Hyderabad,and Reenu, 
                an IT employee who recently moved to the city,
                as they fall in love and face various challenges in their relationship. </p>
              </div>
              </Link>
            )}
          </div>
        ))}

        <button className="right-button  " onClick={handleRightScroll}><MdKeyboardArrowRight style={{fontSize:"30px"}}/></button>
      </div>
    </>
  );
};

export default SeriesList;
