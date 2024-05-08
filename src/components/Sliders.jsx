import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";

import {React,useState} from "react";
import movieimage from "../images/movie_1001.webp"
import movieimage2 from "../images/movie_1002.webp"
import movieimage3 from "../images/movie_1003.webp"
import movieimage4 from "../images/movie_1004.webp"
import movieimage5 from "../images/movie_1006.webp"
import movieimage6 from "../images/movie_1005.png"

function SetsFinite() {

 const [currentSlide, setCurrentSlide] = useState(0);

  
      function CustomPrevArrow(props) {
        const { onClick } = props;
        return (
          <div className={`text-white absolute mt-5  z-10 ${currentSlide===0 ?'hidden':''}`}style={{ left: "-6px" }} onClick={onClick}>
            <MdKeyboardArrowLeft style={{ fontSize: "35px" }} />
          </div>
        );
      }

  function CustomNextArrow(props) {
    const { onClick } = props;
    const totalSlides=6;
    return (
      <div className={`text-white absolute bottom-8 z- ${currentSlide === totalSlides - 3 ? 'hidden' : ''}`} style={{ right: "0" }}  onClick={onClick}>
        <MdKeyboardArrowRight style={{ fontSize: "35px" }} />
      </div>
    );
  }


    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      afterChange: (index) => setCurrentSlide(index),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className=" flex flex-col relative h- pr-2 z-1 rounded-md  px-1 w-96 mt-8">
      <Slider {...settings}>
       <div >
       <img src={movieimage} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100  duration-300 " alt="" />
       </div>
       <div >
       <img src={movieimage2} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100 duration-300 " alt="" />
       </div>
       <div>
       <img src={movieimage3} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100 duration-300 " alt="" />
       </div>
       <div>
       <img src={movieimage4} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100 duration-300 " alt="" />
       </div>
       <div>
       <img src={movieimage5} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100 duration-300 " alt="" />
       </div>
       <div>
       <img src={movieimage6} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100 duration-300 " alt="" />
       </div>

      </Slider>
    </div>
  );
}


export default SetsFinite;
