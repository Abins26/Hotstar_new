import React from "react";
import VideoBackground from "../Background/VideoBackground";
import SeriesList from "../Moviecards/SeriesList2";
import SportsList from "../Moviecards/Sportslist";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer/footer";
import Languages from "../MovieCategories/Languages";
import { FavoriteProvider } from "../FavoriteContext/FavoriteContext";
// import { StarContext } from "../FavoriteContext/FavoriteContext";

const Home = () => {
  return(
    <>
    {/* <StarContext.Provider> */}

      <div>
    {/* <FavoriteProvider> */}
        <Navbar />
        <VideoBackground />
        <div className="relative h-full w-fit bg-black" >
           {/* style={{backgroundColor:"#050714"}} */}

        <SeriesList />

        <SportsList />
        <Languages/>
        <Footer />
      </div>
    {/* </FavoriteProvider> */}
      </div>
    {/* </StarContext.Provider> */}
    </>
  )
};
export default Home;

