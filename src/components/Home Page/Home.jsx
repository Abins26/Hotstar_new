import React from "react";
import VideoBackground from "../Background/VideoBackground";
import SeriesList from "../Moviecards/SeriesList2";
import SportsList from "../Moviecards/Sportslist";
import Navbar from "../Navbar";
import Footer from "../Footer/footer";
import Languages from "../MovieCategories/Languages";

const Home = () => {
  return(
    <>
      <div>
        <Navbar />
        <VideoBackground />
        <div className="relative h-full w-fit bg-black" 
         >
           {/* style={{backgroundColor:"#050714"}} */}

        <SeriesList />

        <SportsList />
        <Languages/>
        <Footer />
</div>
      </div>
    </>
  )
};
export default Home;

