import React, { useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav_dark");
      } else {
        navRef.current.classList.remove("nav_dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar_left">
        <img src={logo} alt="Logo" />
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/TvShows" className="nav-link">
                TV Shows
              </Link>
            </li>
            <li>
              <Link to="/Movies" className="nav-link">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/NewPopular" className="nav-link">
                New & Popular
              </Link>
            </li>
            <li>
              <Link to="/List" className="nav-link">
                My List
              </Link>
            </li>
            <li>
              <Link to="/Browse" className="nav-link">
                Browse by Languages
              </Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
      <div className="navbar_right">
        <img src={search_icon} alt="Search icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications icon" className="icons" />
        <div className="navbar_profile">
          <img src={profile_icon} alt="Profile icon" className="profile" />
          <img src={caret_icon} alt="Caret icon" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
