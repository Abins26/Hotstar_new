// import { FaPlay } from "react-icons/fa6";
// import VIDEO from '../video/premalu_2.mp4';

import {React,useState,useEffect} from 'react';
import Navbar from './Navbar/Navbar';
import SeriesList from "./Moviecards/SeriesList2";
import { useParams } from 'react-router-dom';

function DetailView() {
  // const [movies,setImageUrls] = useState(null);
  // const [id] = useParams()

  const { id } = useParams();
  const [movies, setMovie] = useState(null); 

  const getData = async () => {
    try {
      const resp = await fetch(`https://api.sampleapis.com/movies/drama/${id}`);
      const data = await resp.json();

      
      setMovie(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (

    <div className="relative  bg-#0f0f14 h-full w-full //"  >
      <Navbar />
      {/* Change to image url  */}
      {/* <video className="fixed   top-0 left-0 z-0 w-full h-screen object-cover"  loop muted
      src={VIDEO} type="Video/mp4"> </video> */}

      <div className=" absolute ">
        {movies &&
          <img src={movies.posterURL} alt={movies.title} className="  " style={{ height: "75vh", width: "200vh" }} />}
        {/* <img src="https://fictionhorizon.com/wp-content/uploads/2023/12/Eyes-of-Wakanda.jpg" alt=""  className="object-cover w-full " style={{height:"630px"}}/> */}

      </div>


      <div className='container relative bg-gradient-to-l z-10 x-10 pt-48 pl-40 pr-'>
        {/* Add Image */}
        <div >

          {movies &&
            <h1 className='text-white font-black' style={{ fontSize: "74px" }} >{movies.title}</h1>
          }
        </div>


        {/* <img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/635/1410635-t-847283699e19" alt="OverlayImage" className="mt-4 mr-24" /> */}
        <img src="https://img10.hotstar.com/image/upload/f_auto,h_48/discovery/PP/usp_callouts/newly-added/web/eng/version-1/newlyadded_web_eng.png" alt="" className='w-28' />

        <div className="text-white font-medium text-lg mobiles:text-xs pt-2">
          2018  <span className='text-gray-400 text-xm'> &#8226; </span>
          2h 34m <span className='text-gray-400 text-xm'> &#8226; </span>
          3 Languages <span className='text-gray-400 text-xm'> &#8226; </span>
          <span className='rounded-md w-auto bg-gray-400 bg-opacity-50 py-1 px-2'>U/A 13+</span> </div>

        <p className="text-slate-200 w-1/3 mt-3 pb-2">
          The plot revolves around Sachin, a student who works in a food joint in Hyderabad,
          and Reenu, an IT employee who recently moved to the city,
          as they fall in love and face various challenges in their relationship.</p>
        <div className='text-white font-medium' >
          Adventure <span className='text-gray-400 '>|</span> Acion <span className='text-gray-400 '>|</span> Bromance <span className='text-gray-400 '>|</span> Fantacy
        </div>

        <div className=' w-auto flex justify-between bg-opacity-30'>
          <div>
            <button className=" text-gray-900 text-center font-bold mt-1 h-12 w-60 py-2 px-4 rounded-md bg-opacity-80 bg-gray-100 hover:bg-opacity-90" >
              {/* <FaPlay style={{justifyContent:"center"}} /> */}
              <span className='text-gray-900  text-center font-black text-lg' style={{ fontSize: "24px" }}>&#8227; </span>
              Subscribe to watch </button>
            <button className=" text-2xl mt-4  text-white py-2  px-4 ml-4 rounded-md bg-opacity-50 bg-gray-400 hover:bg-opacity-70 text-center"> &#43; </button>
          </div>

        </div>
        <br />
        <div className="flex">
          <h3 className="text-slate-200 font-black mb-4 mr-10">More Like This    </h3>
          <h3 className="text-slate-200 font-black"> Trailers & More</h3>
        </div>

        <hr />
      </div>
      <SeriesList />

    </div>
      
  );
};

export default DetailView;