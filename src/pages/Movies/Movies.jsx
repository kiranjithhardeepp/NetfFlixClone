import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import heroBanner from "../../assets/extraction.jpg";
import heroTitle from "../../assets/extractionlog.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitileCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Movies.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-section">
        <img src={heroBanner} alt="" className="hero-banner-img" />
        <div className="hero-caption">
          <img src={heroTitle} alt="" className="hero-caption-img" />
          <p>
            Back from the brink of death, highly skilled commando Tyler Rake
            takes on another dangerous mission: saving the imprisoned family of
            a ruthless gangster.
          </p>
          <div className="hero-buttons">
            <Link to={`/Player/${3}`} className="hero-button-link">
              <button className="hero-btn">
                <img src={playIcon} alt="" />
                Play
              </button>
              <button className="hero-btn dark-btn">
                <img src={infoIcon} alt="" />
                More Info
              </button>
            </Link>
          </div>
          <div className="topCard">
            <TitleCards title={"Blockbuster Movies"} category={"now_playing"} />
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"top_rated"} />
        <TitleCards title={"Top Picks For You"} category={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
