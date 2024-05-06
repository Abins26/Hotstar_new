import React from "react";
import VideoBackground from "../VideoBackground";
import SeriesList from "../SeriesList2";
import SportsList from "../Sportslist";
import Navbar from "../Navbar";
import Footer from "../Footer/footer";

const Home = () => {
  return(
    <>
      <div>
        <Navbar />
        <VideoBackground />
<div className="relative h-full w-full bg-black" >

        <SeriesList />

        <SportsList />
        <Footer />
</div>
      </div>
    </>
  )
};
export default Home;

