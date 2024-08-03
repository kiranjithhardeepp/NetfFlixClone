import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitileCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <Link to={`Player/${1}`} className="hero_btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark_btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </Link>
          <div className="topCard">
            <TitleCards />
          </div>
        </div>
      </div>
      <div className="more_crads">
        <TitleCards title={"Blockbuster Movies"} catogery={"now_playing"} />
        <TitleCards title={"Only on Netflix"} catogery={"popular"} />
        <TitleCards title={"Upcoming"} catogery={"top_rated"} />
        <TitleCards title={"Top Picks For you"} catogery={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
