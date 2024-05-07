import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";

import {React,useState} from "react";
import "../MovieCategories/Languages.css";

function Languages() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`text-white absolute mt-16  z-10 ${
          currentSlide === 0 ? "hidden" : ""
        }`}
        style={{ left: "-6px" }}
        onClick={onClick}
      >
        <MdKeyboardArrowLeft style={{ fontSize: "35px" }} />
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    const totalSlides = 9;
    return (
      <div
        className={`text-white absolute bottom-24 ml-6 z- ${
          currentSlide === totalSlides - 5 ? "hidden" : ""
        }`}
        style={{ right: "0" }}
        onClick={onClick}
      >
        <MdKeyboardArrowRight style={{ fontSize: "35px" }} />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: (index) => setCurrentSlide(index),
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: false
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
  };
  return (

    <>
    <div
      className=" flex flex-col relative h-44 pl-44    bg-black rounded-md gap-3  "
      style={{ width: "1500px" }}
    >
      <Slider {...settings}>
        <div className="imgdiv">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e"
            alt=""
            className="  hover:scale-125 transition duration-300 "
          />
        </div>
        <div className="imgdiv">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8"
            alt=""
            className=" hover:scale-110 transition   duration-300 "
          />
        </div>
        <div className="imgdiv">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae"
            alt=""
            className=" hover:scale-110 transition duration-300 "
          />
        </div>
        <div className="imgdiv">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563"
            alt=""
            className=" hover:scale-110 transition  duration-300 "
          />
        </div>
        <div className="imgdiv">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61"
            alt=""
            className="hover:scale-110 transition   duration-300 "
          />
        </div>
        <div className="imgdiv">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e"
            alt=""
            className=" hover:scale-110 transition  duration-300 "
          />
        </div>
        <div className="imgdiv">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e"
            alt=""
            className=" hover:scale-110 transition   duration-300 "
          />
        </div>
        <div className="imgdiv">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8124/1714043448124-a"
            alt=""
            className=" hover:scale-110 transition   duration-300 "
          />
        </div>
        <div className="imgdiv">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6674/1526674-a-fdd5233a7699"
            alt=""
            className="  hover:scale-110 transition duration-300 "
          />
        </div>
      </Slider>
    </div>
    </>
  );
}

export default Languages;

