import React from 'react'
import user from '../images/user.svg'
import search from '../images/search.svg'
import home from '../images/home.svg'
import tv from '../images/tv.svg'
import movie from '../images/movie.svg'
import sports from '../images/sports.svg'
import category from '../images/category.svg'
import './Navbar.css'

const Navbar = () =>{
  return (

    <div className='bg-transparent h-screen w-38 z-30 pt-4 bg-gradient-to-r from-black to-transparent fixed'>
      <div className='img my-8 mx-6 flex  flex-col gap-2'>
        <img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" />

        <div><button type="button" className='text-orange-300 bg-gray-500 bg-opacity-30 w-18 py-1 px-2 rounded-full font-normal text-xs '>Subscribe {"＞"}</button>
        </div>
      </div>
     

      <div className='nav-items  pb-18  bold flex flex-col justify-center  items-center gap-10  '>
        {/* User */}
        <div className='nav-ite text-white flex  relative   hover:fill-white hover:scale-110 '>
          <img src={user}  alt="User Icon" />
          <p className='absolute opacity-0 w-32 left-11'>My Space</p>
        </div>

        {/* Search */}
        <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
          <img src={search}  alt="Search Icon" />
          <p className='absolute opacity-0 left-11'>Search</p>
        </div>

        {/* Home */}
        <div className='nav-ite text-white flex relative  hover:fill-white  hover:scale-110 '>
          <img src={home}  alt="Home Icon" />
          <p className='absolute opacity-0  left-11'>Home</p>
        </div>
 
        {/* TV */}
        <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
          <img src={tv}  alt="TV Icon" />
          <p className='absolute opacity-0 left-11'>TV</p>
        </div>

        {/* Movies */}
        <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
          <img src={movie}  alt="Movies Icon" />
          <p className='absolute opacity-0 left-11'>Movies</p>
        </div>

        {/* Sports */}
        <div className='nav-ite text-white flex relative  hover:fill-white hover:scale-110 '>
          <img src={sports}  alt="Sports Icon" />
          <p className='absolute opacity-0 left-11'>Sports</p>
        </div>

        {/* Categories */}
        <div className='nav-ite text-white flex relative hover:fill-white hover:scale-110 '>
          <img src={category}  alt="Category Icon" />
          <p className='absolute opacity-0  left-11'>Categories</p>
        </div>
      </div>
    </div>
  
  )
}

export default Navbar;
