// import React from 'react';

// const Modal = ({ isOpen, closeModal }) => {
//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-8">
//             <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
//             <p className="mb-4">Movie Content</p>
//             <button
//               className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
//               onClick={closeModal} >
//               Close Modal
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;


import React, { useContext } from "react";
import FavoriteContext from "../FavoriteContext/FavoriteContext";
import "./Modal.css";


function Modal({ onClose }) {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="h-9 w-full right-0 bg-slate-300  mb-3">
          <span className="close left-24 bg-" onClick={onClose}>&times;</span>
        </div>
        <div className="container">
          {favorites.map((movie) => (
            <div className="movie-images" key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={movie.posterURL} alt="" />
              {/* Add more details here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
