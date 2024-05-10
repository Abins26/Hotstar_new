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


import React from 'react';

const Modal = ({ isOpen, closeModal, modalTitle, favoriteCount }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p>Favorite Count: {favoriteCount}</p>
            <p>Modal Content</p>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
