// import React, { createContext, useState } from 'react';

// const StarContext = createContext();

//  const StarProvider = ({ children }) => {
//   const [starCount, setStarCount] = useState(0);

// //   const toggleStar = () => {
// //     setStarCount((prevCount) => prevCount + 1);
// //   };

// //   const updateCount = () => {
// //     setStarCount((prevCount) => prevCount + 1);
// //   };

// //   return (
// //     <StarContext.Provider value={{ starCount, toggleStar,updateCount }}>
// //       {children}
// //     </StarContext.Provider>
// //   );
// // };

// // export default StarContext;

// const incrementCount = () => {
//   setStarCount((prevCount) => prevCount + 1);
// };

// const decrementCount = () => {
//   setStarCount((prevCount) => Math.max(prevCount - 1, 0));
// };

// return (
//   <StarContext.Provider value={{ starCount, incrementCount, decrementCount }}>
//     {children}
//   </StarContext.Provider>
// );
// };

// export { StarProvider, StarContext };

//New test
// import React, { useState, createContext, useEffect } from "react";

// const FavoriteContext = createContext();

// export const FavoriteProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const toggleFavorite = (movie) => {
//     const isFavorite = favorites.some((fav) => fav.id === movie.id);
//     if (isFavorite) {
//       setFavorites(favorites.filter((fav) => fav.id !== movie.id));
//     } else {
//       setFavorites([...favorites, movie]);
//     }
//   };

// const numberOfFavoriteMovies=favorites.length;
//   // useEffect(() => {
//   // }, [favorites]);
// console.log(favorites,numberOfFavoriteMovies);

//   return (
//     <FavoriteContext.Provider value={{ favorites, toggleFavorite,numberOfFavoriteMovies }}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// };

// export default FavoriteContext;


// 
import React, { useState, createContext, useEffect } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  // Update the number of favorite movies whenever favorites list changes
  const [numberOfFavoriteMovies, setNumberOfFavoriteMovies] = useState(0);

  useEffect(() => {
    setNumberOfFavoriteMovies(favorites.length);
  }, [favorites]);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, numberOfFavoriteMovies }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;

// 
