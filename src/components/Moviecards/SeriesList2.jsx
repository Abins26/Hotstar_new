
////test 4

import React, { useState, useEffect, useContext } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/SeriesList.css";
import FavoriteContext from "../FavoriteContext/FavoriteContext";
import Modal from "../Modal/Modal";
function SeriesList() {
  
  // State variables
  const [imageUrls, setImageUrls] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Context
  const { favorites, toggleFavorite } = useContext(FavoriteContext);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Fetch data function
  const getData = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/movies/drama");
      const movies = await resp.json();
      setImageUrls(movies);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Left scroll handler
  const handleLeftScroll = () => {
    setScrollPosition((prevPosition) => Math.max(0, prevPosition - 7));
  };

  // Right scroll handler
  const handleRightScroll = () => {
    setScrollPosition((prevPosition) => Math.min(prevPosition + 6, imageUrls.length - 7)
    );
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  // Toggle modal visibility
  //  const toggleModal = () => {
  //   setShowModal (true);
  // };
    
  return (
    <>
      <div className="seriescontainer flex flex-row">
        <h1 className="Serieshead">Latest Release</h1>
        <button className="left-button" onClick={handleLeftScroll}>
          <MdKeyboardArrowLeft style={{ fontSize: "30px" }} />
        </button>

        {imageUrls.slice(scrollPosition, scrollPosition + 9).map((url, index) => (
          <div
            key={url.title}
            className="seriescard"
            onMouseEnter={() => setHoveredIndex(index + scrollPosition)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index + scrollPosition && (
              <button className="star-button"

            // Inside the star button click handler
            onClick={() => {
              toggleFavorite(url);
              if (!favorites.some((fav) => fav.id === url.id)) {
                setShowModal(true); // Show the modal only if the movie is added to favorites
              }
            }} 
            >
                <FaStar
                  className="star-icon"
                  style={{
                    color: favorites.some((fav) => fav.id === url.id)
                      ? "yellow"
                      : "white",
                  }}
                />
              </button>
            )}

            <img
              src={url.posterURL}
              alt={`Movie Poster ${index}`}
              className="seriesimg"
              height="200px"
              width="150px"
            />

            {hoveredIndex === index + scrollPosition && (
              <Link to={`/details/${url.id}`}>
                <div className="seriesoverlay">
                  <div style={{ display: "flex" }}>
                    <button className="seriesbutton">
                      <h3 style={{ fontWeight: "bold", fontSize: 8 }}>Watch Now</h3>
                    </button>
                    <button className="small-button">+</button>
                  </div>
                  <p className="small-text">2024-2h.12m-English-U/A16+</p>
                  <p className="seriestext">
                  Black Boys Look Blue by Tarell Alvin McCraney, 
                  it tells the story of a young Black man coming 
                  to grips with his attraction to other men. </p>
                </div>
              </Link>
            )}
          </div>
        ))}
        <button className="right-button" onClick={handleRightScroll}>
          <MdKeyboardArrowRight style={{ fontSize: "30px" }} />
        </button>
      </div>
      {showModal && <Modal onClose={toggleModal} />} {/* Render the modal */}
    </>
  );
}

export default SeriesList;

