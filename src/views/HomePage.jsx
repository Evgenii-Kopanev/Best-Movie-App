import React, { useContext } from "react";
import MoviePreview from "../components/MoviePreview";
import { AppContext } from "../contexts/context";
import styles from "../styles/homePage.module.css";

export default function HomePage() {
  const { movieList, currentMovie } = useContext(AppContext);
  console.log("CURRENT MOVIE", currentMovie);
  movieList.sort((a, b) => b.rank.current - a.rank.current);
  let mostRated = movieList.slice(0, 3);
  console.log("MOST RATED", mostRated);
  let theOne = mostRated.slice(0, 1);
  console.log("THE ONE", theOne);

  return (
    <div>
      <hr />
      <div className={styles.moviePreviewContainer}>
        {mostRated.map((movie, index) => (
          <MoviePreview key={index} movie={movie} />
        ))}
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "85%" }}>
          <MoviePreview movie={theOne[0]} />
        </div>
        <div className={styles.listOfAllMovies}>
          {movieList.map((movie, index) => (
            <MoviePreview key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
