import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import { Link, useNavigate } from "react-router-dom";
import play from "../../assets/image.png"; // Corrected the import statement

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const navigate = useNavigate();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjM3NGU1ODAzYjY1MDZmNWUxMGYwMDdhNWY1NjBiZCIsIm5iZiI6MTcyMjQwMzkyOS4xNTE3MzEsInN1YiI6IjY2YTljNjQ2Y2UwOGNiNWNkOGEzODg1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.43ruy0PIr2CLbQjAN3z5OAUxyN_IVMOD-RQv4Z-FjOE",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, [category]);

  const handlePlayClick = (event, id) => {
    event.preventDefault();
    navigate(`/Player/${id}`);
  };

  return (
    <div className="title_card">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card_container">
        <div className="card_list" ref={cardsRef}>
          {apiData.map((data, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                  alt={data.original_title}
                  className="netflixImg"
                />
                <p>{data.original_title}</p>
                <img
                  src={play}
                  alt="Play button"
                  className="play_button"
                  onClick={(event) => handlePlayClick(event, data.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TitleCards;
