import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./contexts/context.js";
import HomePage from "./views/HomePage.jsx";
import { useEffect, useState } from "react";
import Movie from "./components/Movie.jsx";
import imageOne from "./img/1.jpeg";
import imageTwo from "./img/2.jpeg";
import imageThree from "./img/3.jpeg";
import imageFour from "./img/4.jpeg";
import imageFive from "./img/5.jpeg";

const movieListInitialState = [
  {
    movieName: "Matrix",
    desc: "description of matrix Movie",
    img: imageOne,
    rank: {
      current: null,
      count: [],
    },
  },
  {
    movieName: "Spider-Man",
    desc: "description of SpiderMan Movie",
    img: imageTwo,
    rank: {
      current: null,
      count: [],
    },
  },
  {
    movieName: "Avengers",
    desc: "description of Avengers Movie",
    img: imageThree,
    rank: {
      current: null,
      count: [],
    },
  },
  {
    movieName: "Green Mile",
    desc: "description of Green Mile Movie",
    img: imageFour,
    rank: {
      current: null,
      count: [],
    },
  },
  {
    movieName: "Titanik",
    desc: "description of Titanik Movie",
    img: imageFive,
    rank: {
      current: null,
      count: [],
    },
  },
];

function App() {
  const [movieList, setMovieList] = useState(movieListInitialState);
  const [currentMovie, setCurrentMovie] = useState(null);

  return (
    <>
      <AppContext.Provider
        value={{
          movieList,
          setMovieList,
          currentMovie,
          setCurrentMovie,
        }}
      >
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          BEST MOVIE - BM
        </h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route
            path="/:movie_name"
            element={<Movie currentMovie={currentMovie} />}
          />
          <Route></Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
