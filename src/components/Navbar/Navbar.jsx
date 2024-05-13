// import { MdKeyboardArrowRight } from "react-icons/md";
// // import { IoStarOutline } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa";

// import React from 'react'
// import user from '../../images/user.svg'
// import search from '../../images/search.svg'
// import home from '../../images/home.svg'
// import tv from '../../images/tv.svg'
// import movie from '../../images/movie.svg'
// import sports from '../../images/sports.svg';
// import category from '../../images/category.svg'
// import '../Navbar/Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (

//     <div className='bg-transparent h-screen w-38 z-30 pt-4 bg-gradient-to-r from-black to-transparent fixed'>
//       <div className='img my-8 mx-6 flex  flex-col gap-2'>
//         <img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt=""/>

//         <div className="flex items-center">
//           <button type="button" className='text-orange-300 bg-gray-500 bg-opacity-30 w-18 py-1 px-2 flex rounded-full font-normal text-xs '>
//             Subscribe<MdKeyboardArrowRight style={{ fontSize: "16px" }} />
//           </button>
//         </div>
//       </div>
     
     
//       <div className='nav-items  pb-18  bold flex flex-col justify-center  items-center gap-10  '>
//         {/* User */}
//         <div className='nav-ite text-white flex  relative   hover:fill-white hover:scale-110 '>
//           <img src={user}  alt="User Icon" />
//           <p className='absolute opacity-0 w-32 left-11'>My Space</p>
//         </div>

//         {/* Search */}
//         <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
//           <img src={search}  alt="Search Icon" />
//           <p className='absolute opacity-0 left-11'>Search</p>
//         </div>

//         {/* Home */}
//         <Link to={"/"}>
//           <div className='nav-ite text-white flex relative  hover:fill-white  hover:scale-110 '>
//             <img src={home} alt="Home Icon" />
//             <p className='absolute opacity-0  left-11'>Home</p>
//           </div>
//         </Link>
 
//         {/* TV */}
//         <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
//           <img src={tv}  alt="TV Icon" />
//           <p className='absolute opacity-0 left-11'>TV</p>
//         </div>

//         {/* Movies */}
//         <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
//           <img src={movie}  alt="Movies Icon" />
//           <p className='absolute opacity-0 left-11'>Movies</p>
//         </div>

//         {/* Sports */}
//         <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
//           <img src={sports}  alt="Sports Icon" />
//           <p className='absolute opacity-0 left-11'>Sports</p>
//         </div>

//         {/* Categories */}
//         <div className='nav-ite text-white flex relative hover:fill-white hover:scale-110 '>
//           <img src={category}  alt="Category Icon" />
//           <p className='absolute opacity-0 hover:opacity-100 left-11'>Categories</p>
//         </div>

//         {/* Favorites */}
//         {/* <Link to={"/fav"}> */}
//         <div className='nav-ite text-white flex relative hover:fill-white hover:scale-110 '>
//           {/* <img src={category}  alt="Category Icon" /> */}
//           {/* <IoStarOutline className="" /> */}
//           <FaRegHeart style={{fontWeight:"10%"}}/>
//           <p className='absolute opacity-0  left-11'>Favorites</p>
//         </div>
//         {/* </Link> */}
//       </div>
//     </div>
  
//   )
// }

// export default Navbar;


import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import React, { useContext, useState } from 'react';
// import { useContext } from 'react';
// import StarContext from '../CountContext/StarContext'; // Import the context


import user from '../../images/user.svg';
import search from '../../images/search.svg';
import home from '../../images/home.svg';
import tv from '../../images/tv.svg';
import movie from '../../images/movie.svg';
import sports from '../../images/sports.svg';
import category from '../../images/category.svg';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import FavoriteContext from "../FavoriteContext/FavoriteContext";
import Modal from "../Modal/Modal";

const Navbar = () => {

  const {numberOfFavoriteMovies}=useContext(FavoriteContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { favorites } = useStarContext();
  // const { toggleFavorite } = useContext(StarContext); // Access the context

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };


  // console.log(numberOfFavoriteMovies );
  return (
    <>
      <div className='bg-transparent h-screen w-38 z-30 pt-4 bg-gradient-to-r from-black to-transparent fixed'>
        <div className='img my-8 mx-6 flex  flex-col gap-2'>
          <img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt="" />

          <div className="flex items-center">
            <button type="button" className='text-orange-300 bg-gray-500 bg-opacity-30 w-18 py-1 px-2 flex rounded-full font-normal text-xs '>
              Subscribe<MdKeyboardArrowRight style={{ fontSize: "16px" }} />
            </button>
          </div>
        </div>


        <div className='nav-items  pb-18  bold flex flex-col justify-center  items-center gap-10  '>
          {/* Favorites */}
          <div className='nav-ite text-white flex relative hover:fill-white hover:scale-110 '>
           <span className="bg-white rounded-full text-center w-6  text-black">
            {numberOfFavoriteMovies}
           </span>
            <FaRegHeart style={{ fontWeight: "10%" }} onClick={openModal} />
            <p className='absolute opacity-0  left-11' onClick={openModal}>Favorites
            {/* <span>{starCount}</span> Displays the count */}
            </p>
          </div>

          {/* User */}
          <div className='nav-ite text-white flex  relative   hover:fill-white hover:scale-110 '>
            <img src={user} alt="User Icon" />
            <p className='absolute opacity-0 w-32 left-11'>My Space</p>
          </div>

          {/* Search */}
          <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
            <img src={search} alt="Search Icon" />
            <p className='absolute opacity-0 left-11'>Search</p>
          </div>

          {/* Home */}
          <Link to={"/"}>
            <div className='nav-ite text-white flex relative  hover:fill-white  hover:scale-110 '>
              <img src={home} alt="Home Icon" />
              <p className='absolute opacity-0  left-11'>Home</p>
            </div>
          </Link>

          {/* TV */}
          <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
            <img src={tv} alt="TV Icon" />
            <p className='absolute opacity-0 left-11'>TV</p>
          </div>

          {/* Movies */}
          <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
            <img src={movie} alt="Movies Icon" />
            <p className='absolute opacity-0 left-11'>Movies</p>
          </div>

          {/* Sports */}
          <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
            <img src={sports} alt="Sports Icon" />
            <p className='absolute opacity-0 left-11'>Sports</p>
          </div>

          {/* Categories */}
          <div className='nav-ite text-white flex relative hover:fill-white hover:scale-110 '>
            <img src={category} alt="Category Icon" />
            <p className='absolute opacity-0 hover:opacity-100 left-11'>Categories</p>
          </div>

           {/* Modal */}
{ isModalOpen && <Modal onClose={()=> setIsModalOpen(false)}/> }
        </div>
      </div>

    </>
);
}

export default Navbar;
