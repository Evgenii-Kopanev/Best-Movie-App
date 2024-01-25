import React, { useContext } from "react";
import { AppContext } from "../contexts/context";
import GiveRank from "./GiveRank";
import MoviePreview from "./MoviePreview";
import { sortArrayOfObjectsByName } from "../utilities/utilities";
import { Navigate, useNavigate } from "react-router-dom";

export default function Movie() {
  const { currentMovie, movieList } = useContext(AppContext);
  const navigate = useNavigate();
  sortArrayOfObjectsByName(movieList);
  console.log("MOVIE LIST", movieList);

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          border: "3px solid grey",
          borderRadius: "10px 20px 10px 20px",
        }}
      >
        Movie name: {currentMovie.movieName}
      </h1>
      <div
        style={{
          backgroundImage: `url(${currentMovie.img})`,
          backgroundSize: "cover", // Adjust this property as needed
          backgroundPosition: "center", // Adjust this property as needed
          width: "95%", // Set width to fill the container
          height: "50vh", // Set height to fill the viewport
          borderRadius: "20px",
          margin: "auto",
        }}
      ></div>
      {/* <img src={currentMovie.img} alt="dog" /> */}
      <h2>Movie Description: {currentMovie.desc}</h2>
      <h3 style={{ display: "flex", justifyContent: "end" }}>
        {currentMovie.rank.current}
      </h3>
      <div>
        <GiveRank currentMovie={currentMovie} />
      </div>
      <button style={{ width: "100%" }} onClick={() => navigate("/HomePage")}>
        HOME
      </button>
      {movieList.map((movie, index) => (
        <MoviePreview key={index} movie={movie} />
      ))}
    </div>
  );
}
