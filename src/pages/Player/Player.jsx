import React, { useEffect, useState } from "react";
import back_arrow from "../../assets/back_arrow_icon.png";
import "./Player.css";
import { useNavigate, useParams } from "react-router-dom";
import MovieData from "../../assets/MovieData/MovieData";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjM3NGU1ODAzYjY1MDZmNWUxMGYwMDdhNWY1NjBiZCIsIm5iZiI6MTcyMjQwMzkyOS4xNTE3MzEsInN1YiI6IjY2YTljNjQ2Y2UwOGNiNWNkOGEzODg1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.43ruy0PIr2CLbQjAN3z5OAUxyN_IVMOD-RQv4Z-FjOE",
    },
  };

  useEffect(() => {
    // Find the movie object in the MovieData array that matches the given id
    const movie = MovieData.find((movie) => movie.id === parseInt(id, 10));

    if (movie) {
      setVideoData({
        key: `${movie.key}`,
        name: movie.name,
        published_at: movie.published_at || "N/A",
        type: movie.type || "N/A",
      });
    } else {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setVideoData(data.results && data.results.length > 0 ? data.results[0] : null);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  return (
    <div className="player">
      <img
        src={back_arrow}
        alt="Back"
        onClick={() => {
          console.log("Back button clicked");
          navigate(-1);
        }}
      />
      {videoData ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoData.key}`}
          title={videoData.name}
          frameBorder="0"
          width="90%"
          height="90%"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}
      <div className="playerinfo">
        <p>
          Published Date: {videoData && videoData.published_at ? videoData.published_at.slice(0, 10) : "N/A"}
        </p>
        <p>Name: {videoData ? videoData.name : "N/A"}</p>
        <p>Type: {videoData ? videoData.type : "N/A"}</p>
      </div>
    </div>
  );
};

export default Player;
