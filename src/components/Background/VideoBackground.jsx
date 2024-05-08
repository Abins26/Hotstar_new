import { PiSpeakerSlashThin,PiSpeakerHighThin } from "react-icons/pi";
import React,{useState} from 'react';
import VIDEO from '../../video/premalu_2.mp4';
import SetsFinite from '../Sliders';

// import { FaPlay } from "react-icons/fa6";
// import {Link} from "react-router-dom";


// import SportsList from '../Moviecards/Sportslist';
// import SeriesList from '../Moviecards/SeriesList2';

// import MovieList from './MovieList';

const VideoBackground = () => {

  // State to track mute/unmute
  const [muted, setMuted] = useState(true); 
  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    
    <div className="relative  "  >
      {/* <Link to={ "details"}> */}

       <video className="fixed  inset-0 top-0 left-0 z-0 w-full h-screen object-cover" autoPlay loop muted={muted} 
      src={VIDEO} type="Video/mp4"> </video>
      
      
      <div className='container relative  z- x-10 pt-48 pl-40 pr-102 w-screen  '>
      {/* bg-gradient-to-t from-black to-transparent */}
        {/* Add Image */}
        <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/8256/1712839838256-t" alt="OverlayImage" className="mt-4 mr-24" />
        <img src="https://img10.hotstar.com/image/upload/f_auto,h_48/discovery/PP/usp_callouts/newly-added/web/eng/version-1/newlyadded_web_eng.png" alt="" className='w-28'/>

        <div className="text-white font-medium text-lg pt-2">
        2024  <span className='text-gray-400 text-xm'> &#8226; </span>
         2h 34m <span className='text-gray-400 text-xm'> &#8226; </span>
         3 Languages <span className='text-gray-400 text-xm'> &#8226; </span>
        <span className='rounded-md w-auto bg-gray-400 bg-opacity-50 py-1 px-2'>U/A 13+</span> </div>
        
        <p className="text-slate-300 w- mt-3 pb-2">
        The plot revolves around Sachin, a student who works in a food joint in Hyderabad,<br />
        and Reenu, an IT employee who recently moved to the city, <br />
        as they fall in love and face various challenges in their relationship.</p>

      {muted ? (
        // Mute icon
        <PiSpeakerSlashThin onClick={toggleMute} 
        className="absolute  right-10  text-white z-10 cursor-pointer" style={{ fontSize: '24px' }} /> 
      ) : (
        // Unmute icon
        <PiSpeakerHighThin onClick={toggleMute} 
        className="absolute  right-10 text-white z-10 cursor-pointer" style={{ fontSize: '24px' }} />
      )}
       <div className='text-white font-medium' > Romance <span className='text-gray-400 '>|</span> Comedy <span className='text-gray-400 '>|</span> Bromance <span className='text-gray-400 '>|</span> Love Triangle
       </div>

       <div className=' w-auto flex justify-between bg-opacity-30'>
        <div>
       <button className=" text-white text-center justify-center font-bold mt-1 h-12 w-60 py-2 px-4   rounded-md bg-opacity-30 bg-gray-100 hover:bg-opacity-50"> 
       <span className='text-stone-50 text-center font-black text-xl'  >&#8227; </span>
       {/* <FaPlay/> */}
         Subscribe to watch </button>
       <button className=" text-2xl mt-4  text-white py-2  px-4 ml-4 rounded-md bg-opacity-50 bg-gray-400 hover:bg-opacity-70 text-center"> &#43; </button>
       </div>
       

       <SetsFinite/>
        </div>  
      </div>
      {/* </Link> */}
      
      {/* <SeriesList/> */}
      {/* <SportsList/> */}


      {/* <MovieList/> */}

    </div>
      
  );
};

export default VideoBackground;



// import { PiSpeakerSlashThin, PiSpeakerHighThin } from "react-icons/pi";
// import React, { useState } from 'react';
// import VIDEO from '../../video/premalu_2.mp4';
// import SetsFinite from '../Sliders';

// const VideoBackground = () => {
//   const [muted, setMuted] = useState(true);

//   const toggleMute = () => {
//     setMuted(!muted);
//   };

//   return (
//     <div className="relative">
//       <video className="fixed inset-0 z-0 w-full h-screen object-cover" autoPlay loop muted={muted} src={VIDEO} type="video/mp4"></video>
//       <div className='container relative z-10 pt-20 md:pt-48 pl-4 md:pl-40 pr-4 md:pr-102'>
//         <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/8256/1712839838256-t" alt="OverlayImage" className="mt-4 mr-4 md:mr-24" />
//         <img src="https://img10.hotstar.com/image/upload/f_auto,h_48/discovery/PP/usp_callouts/newly-added/web/eng/version-1/newlyadded_web_eng.png" alt="" className='w-14 md:w-28'/>
//         <div className="text-white font-medium text-lg pt-2">
//           2024  <span className='text-gray-400 text-xm'> &#8226; </span>
//           2h 34m <span className='text-gray-400 text-xm'> &#8226; </span>
//           3 Languages <span className='text-gray-400 text-xm'> &#8226; </span>
//           <span className='rounded-md w-auto bg-gray-400 bg-opacity-50 py-1 px-2'>U/A 13+</span>
//         </div>
//         <p className="text-slate-300 w-full mt-3 pb-2">
//           The plot revolves around Sachin, a student who works in a food joint in Hyderabad,
//           and Reenu, an IT employee who recently moved to the city,
//           as they fall in love and face various challenges in their relationship.
//         </p>
//         <div className='text-white font-medium'>
//           Romance <span className='text-gray-400 '>|</span> Comedy <span className='text-gray-400 '>|</span> Bromance <span className='text-gray-400 '>|</span> Love Triangle
//         </div>
//         <div className='w-full flex flex-col md:flex-row items-center justify-between bg-opacity-30'>
//           <div>
//             <button className="text-white text-center justify-center font-bold mt-1 h-12 w-full md:w-60 py-2 px-4 rounded-md bg-opacity-30 bg-gray-100 hover:bg-opacity-50">
//               <span className='text-stone-50 text-center font-black text-xl'>&#8227;</span> Subscribe to watch
//             </button>
//             <button className="text-2xl mt-4 text-white py-2 px-4 rounded-md bg-opacity-50 bg-gray-400 hover:bg-opacity-70 text-center"> &#43; </button>
//           </div>
//           <div className="mt-4 md:mt-0">
//             <SetsFinite />
//           </div>
//         </div>
//         <div className="absolute top-4 right-4 md:top-10 md:right-10">
//           {muted ? (
//             <PiSpeakerSlashThin onClick={toggleMute} className="text-white cursor-pointer" style={{ fontSize: '24px' }} />
//           ) : (
//             <PiSpeakerHighThin onClick={toggleMute} className="text-white cursor-pointer" style={{ fontSize: '24px' }} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;
