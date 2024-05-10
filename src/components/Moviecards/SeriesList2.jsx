
// import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
// // import { IoStarOutline } from "react-icons/io5";
// import { FaStar } from "react-icons/fa";

// import React, { useState, useEffect,useContext } from "react";
// // import StarContext from "../CountContext/StarContext";
// import "../style/SeriesList.css";
// import { Link } from "react-router-dom";


// function SeriesList () {
//   const [imageUrls, setImageUrls] = useState([]);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [favorites, setFavorites] = useState(false);

//   // const { incrementCount, decrementCount } = useContext(StarContext);

//   // const { toggleStar,updateCount }=useContext(StarContext);

//   const getData = async () => {
//     try {
//       const resp = await fetch("https://api.sampleapis.com/movies/drama");
//       const movies = await resp.json();
//       setImageUrls(movies);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };


//   useEffect(() => {
//     getData();
//   }, []);

//   const handleLeftScroll = () => {
//     setScrollPosition((prevPosition) => Math.max(0, prevPosition - 7));
//   };

//   const handleRightScroll = () => {
//     setScrollPosition((prevPosition) =>
//       Math.min(prevPosition + 6, imageUrls.length - 7)
//     );
//   };

//   return (
//     <>
//       <div className="seriescontainer flex flex-row ">
//         <h1 className="Serieshead">Latest Release</h1>
//         <button className="left-button" onClick={handleLeftScroll}> <MdKeyboardArrowLeft style = {{ fontSize:"30px"}}/></button>

//         {imageUrls.slice(scrollPosition, scrollPosition + 9).map((url, index) => (
//           <div
//             // key={index + scrollPosition} 
//             key={url.title}
//             className="seriescard"
//             onMouseEnter={() => setHoveredIndex(index + scrollPosition)}
//             onMouseLeave={() => setHoveredIndex(null)} >
            
//            {/* <button className="star-button"> <IoStarOutline className="star-icon" /> </button> */}
//             {/* <div className="icon-overlay"> */}
//             {/* </div> */}

//              {/* {hoveredIndex === index + scrollPosition && (
//               <IoStarOutline className="star-icon" />
//             )} */}

//            {hoveredIndex === index + scrollPosition && (
//               <button className="star-button">
//                < FaStar className="star-icon" 
//               //  style={{  color: favorites[index + scrollPosition] ? 'yellow' : 'white', 
//               //  fontWeight: "10%" }}
//               // onClick={() => toggleFavorite(index + scrollPosition)}
//               />

//                {/* <IoStarOutline className="star-icon" /> */}
//               </button>

//             )}

//             <img src={url.posterURL} alt={`Movie Poster ${index}`} className="seriesimg" height="200px" width="150px" />

//             {hoveredIndex === index + scrollPosition && (
//               <Link to={`/details/${url.id}`}>
//               <div className="seriesoverlay">
//                 <div style={{ display: "flex" }}>
//                     <button className="seriesbutton">
//                     <h3 style={{ fontWeight: "bold", fontSize: 8 }}>Watch Now</h3>
//                   </button>
//                   <button className="small-button">+</button>
//                 </div>

//                 <p className="small-text">2024-2h.12m-English-U/A16+</p>

//                 <p className="seriestext">
//                 The plot revolves around Sachin,
//                 a student who works in a food joint in Hyderabad,and Reenu, 
//                 an IT employee who recently moved to the city,
//                 as they fall in love and face various challenges in their relationship. </p>
//               </div>
//               </Link>
//             )}
//           </div>
//         ))}

//         <button className="right-button" onClick={handleRightScroll}><MdKeyboardArrowRight style={{fontSize:"30px"}}/></button>
//       </div>
//     </>
//   );
// };

// export default SeriesList;




// import React, { useState, useEffect, useContext } from "react";
// import { FaStar } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import StarProvider, { useStarContext } from "../CountContext/StarContext";
// import "../style/SeriesList.css";

// function SeriesList() {
//   const [imageUrls, setImageUrls] = useState([]);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const { favorites, toggleFavorite, setModalTitle } = useStarContext();

//   const getData = async () => {
//     try {
//       const resp = await fetch("https://api.sampleapis.com/movies/drama");
//       const movies = await resp.json();
//       setImageUrls(movies);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleLeftScroll = () => {
//     setScrollPosition((prevPosition) => Math.max(0, prevPosition - 7));
//   };

//   const handleRightScroll = () => {
//     setScrollPosition((prevPosition) =>
//       Math.min(prevPosition + 6, imageUrls.length - 7)
//     );
//   };

//   const handleStarClick = (title) => {
//     toggleFavorite(title);
//     setModalTitle(title);
//   };

//   return (
//     <div className="seriescontainer flex flex-row ">
//       <h1 className="Serieshead">Latest Release</h1>
//       <button className="left-button" onClick={handleLeftScroll}>
//         {" "}
//         <MdKeyboardArrowLeft style={{ fontSize: "30px" }} />
//       </button>

//       {imageUrls.slice(scrollPosition, scrollPosition + 9).map((url, index) => (
//         <div
//           key={url.title}
//           className="seriescard"
//           onMouseEnter={() => setHoveredIndex(index + scrollPosition)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           {hoveredIndex === index + scrollPosition && (
//             <button
//               className="star-button"
//               onClick={() => handleStarClick(url.title)}
//             >
//               <FaStar
//                 className="star-icon"
//                 style={{
//                   color: favorites.includes(url.title) ? "yellow" : "white",
//                   fontWeight: "10%",
//                 }}
//               />
//             </button>
//           )}

//           <img
//             src={url.posterURL}
//             alt={`Movie Poster ${index}`}
//             className="seriesimg"
//             height="200px"
//             width="150px"
//           />

//           {hoveredIndex === index + scrollPosition && (
//             <Link to={`/details/${url.id}`}>
//               <div className="seriesoverlay">
//                 <div style={{ display: "flex" }}>
//                   <button className="seriesbutton">
//                     <h3 style={{ fontWeight: "bold", fontSize: 8 }}>
//                       Watch Now
//                     </h3>
//                   </button>
//                   <button className="small-button">+</button>
//                 </div>

//                 <p className="small-text">2024-2h.12m-English-U/A16+</p>

//                 <p className="seriestext">
//                   The plot revolves around Sachin, a student who works in a
//                   food joint in Hyderabad,and Reenu, an IT employee who
//                   recently moved to the city, as they fall in love and face
//                   various challenges in their relationship.{" "}
//                 </p>
//               </div>
//             </Link>
//           )}
//         </div>
//       ))}

//       <button className="right-button" onClick={handleRightScroll}>
//         <MdKeyboardArrowRight style={{ fontSize: "30px" }} />
//       </button>
//     </div>
//   );
// }

// export default SeriesList;



// Import necessary modules
// SeriesList.js
import React, { useState, useEffect, useContext } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/SeriesList.css";
import FavoriteContext from "../FavoriteContext/FavoriteContext";

function SeriesList() {
  // State variables
  const [imageUrls, setImageUrls] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modalMovies, setModalMovies] = useState([]);

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
    setScrollPosition((prevPosition) =>
      Math.min(prevPosition + 6, imageUrls.length - 7)
    );
  };

  // Toggle favorite handler
  const toggleFavorite = (index) => {
    const movie = imageUrls[index];
    const isModalMovie = modalMovies.some((modalMovie) => modalMovie.id === movie.id);
    if (isModalMovie) {
      setModalMovies(modalMovies.filter((modalMovie) => modalMovie.id !== movie.id));
    } else {
      setModalMovies([...modalMovies, movie]);
    }
  };

  return (
    <FavoriteContext.Provider value={{ toggleFavorite }}>
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
                <button
                  className="star-button"
                  onClick={() => toggleFavorite(index + scrollPosition)}
                >
                  <FaStar
                    className="star-icon"
                    style={{
                      color: modalMovies.some((modalMovie) => modalMovie.id === url.id)
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
                      The plot revolves around Sachin, a student who works in a food joint in Hyderabad, and Reenu, an IT employee who recently moved to the city, as they fall in love and face various challenges in their relationship.
                    </p>
                  </div>
                </Link>
              )}
            </div>
          ))}

          <button className="right-button" onClick={handleRightScroll}>
            <MdKeyboardArrowRight style={{ fontSize: "30px" }} />
          </button>
        </div>
        {modalMovies.length > 0 && <Modal movies={modalMovies} onClose={() => setModalMovies([])} />}
      </>
    </FavoriteContext.Provider>
  );
}

// Modal component
function Modal({ movies, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content ">
        <div className="h-9 w-full right-0 bg-slate-300  mb-3">
        <span className="close left-24 bg-" onClick={onClose}>&times;</span>
        </div>
<div className="container">
        {movies.map((movie) => (
          <div className="movie-images" key={movie.id}>
            <h2 className="">{movie.title}</h2>
            
            <img src={movie.posterURL} alt="" />
            {/* Add more details here */}
          </div>

        ))}
        </div>
      </div>
    </div>
  );
}

export default SeriesList;
