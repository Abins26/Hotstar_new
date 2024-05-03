import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import movieimage from "../images/movie_1001.webp"
import movieimage2 from "../images/movie_1002.webp"
import movieimage3 from "../images/movie_1003.webp"
import movieimage4 from "../images/movie_1004.webp"
import movieimage5 from "../images/movie_1006.webp"

function SetsFinite() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className="slider-container flex flex-col relative pr-6 z-10 rounded-md  gap-2 w-96 mt-8">
      <Slider {...settings}>
       <div >
       <img src={movieimage} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100  duration-300 " />
       </div>
       <div >
       <img src={movieimage2} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100 duration-300 " />
       </div>
       <div>
       <img src={movieimage3} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100 duration-300 " />
       </div>
       <div>
       <img src={movieimage4} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100 duration-300 " />
       </div>
       <div>
       <img src={movieimage5} className="h-20 w-28 hover:scale-110 transition opacity-50 hover:opacity-100 duration-300 " />
       </div>

      </Slider>
    </div>
  );
}

export default SetsFinite;
