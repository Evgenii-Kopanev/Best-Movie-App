import React, { useContext } from "react";
import styles from "../styles/moviePreview.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/context";

export default function MoviePreview(props) {
  const navigate = useNavigate();
  const { setCurrentMovie } = useContext(AppContext);

  const getMovie = () => {
    setCurrentMovie(props.movie);
    navigate(`/${props.movie.movieName}`);
  };

  return (
    <div
      onClick={() => {
        getMovie();
      }}
      className={styles.container}
      style={{
        backgroundImage: `url(${props.movie.img})`,
        backgroundSize: "cover", // Adjust this property as needed
        backgroundPosition: "center", // Adjust this property as needed
        width: "98%", // Set width to fill the container
        // height: "50vh", // Set height to fill the viewport
      }}
    >
      <h1>{props.movie.movieName}</h1>
    </div>
  );
}
