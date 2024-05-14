import React from "react";
import VideoBackground from "../Background/VideoBackground";
import SeriesList from "../Moviecards/SeriesList2";
import SportsList from "../Moviecards/Sportslist";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer/footer";
import Languages from "../MovieCategories/Languages";
import Studio from "../Studio/Studio";
// import { FavoriteProvider } from "../FavoriteContext/FavoriteContext";
// import { StarContext } from "../FavoriteContext/FavoriteContext";

const Home = () => {
  return(
    <>
    {/* <StarContext.Provider> */}
    {/* <FavoriteProvider> */}

      <div>
        <Navbar />
        <VideoBackground />
        <div className="relative h-full w-fit bg-black" >
        <SeriesList />
        <SportsList />
        <Languages/>
        <Studio/>
        <Footer />
      </div>
      </div>
      
    {/* </FavoriteProvider> */}
    {/* </StarContext.Provider> */}
    </>
  )
};
export default Home;

