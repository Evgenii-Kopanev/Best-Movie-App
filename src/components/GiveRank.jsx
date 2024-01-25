import React, { useContext } from "react";
import { AppContext } from "../contexts/context";
import { arrayAverage } from "../utilities/utilities";
import styles from "../styles/giveRank.module.css";

export default function GiveRank(props) {
  const { movieList, setMovieList, currentMovie, setCurrentMovie } =
    useContext(AppContext);
  const handleClick = (e) => {
    let movieListClone = structuredClone(movieList);
    let currentMovieClone = structuredClone(currentMovie);

    const updateMovie = (number) => {
      const findMovie = movieListClone.find(
        (movie) => movie.movieName === props.currentMovie.movieName
      );
      findMovie.rank.count.push(number);
      findMovie.rank.current = arrayAverage(findMovie.rank.count);
      setMovieList(movieListClone);
      currentMovieClone.rank.count.push(number);
      currentMovieClone.rank.current = arrayAverage(findMovie.rank.count);
      setCurrentMovie(currentMovieClone);
    };

    if (e == 1) {
      updateMovie(1);
      return;
    }
    if (e == 2) {
      updateMovie(2);
      return;
    }
    if (e == 3) {
      updateMovie(3);
      return;
    }
    if (e == 4) {
      updateMovie(4);
      return;
    }
    if (e == 5) {
      updateMovie(5);
      return;
    }
  };

  return (
    <div
      style={{
        display: "flex",

        justifyContent: "space-evenly",
      }}
    >
      <button value={1} onClick={(e) => handleClick(e.target.value)}>
        1
      </button>
      <button value={2} onClick={(e) => handleClick(e.target.value)}>
        2
      </button>
      <button value={3} onClick={(e) => handleClick(e.target.value)}>
        3
      </button>
      <button value={4} onClick={(e) => handleClick(e.target.value)}>
        4
      </button>
      <button value={5} onClick={(e) => handleClick(e.target.value)}>
        5
      </button>
    </div>
  );
}
