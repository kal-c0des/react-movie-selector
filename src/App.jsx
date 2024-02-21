import { useState } from "react";
import MovieCard from "./MovieCard";
import movieEntries from "./movie";
import MovieDetails from "./movieDetails.jsx";

import "./App.css";
import movie from "./movie.js";

function App() {
  const [movieList, setMovieList] = useState(movieEntries);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const mainTitle = "Ripe Tomatoes";
  const subTitle = `A Curated Collection of '90s Films`;

  // const updateSelectedMovie = (movie) => {
  //   setSelectedMovie(movie);

  return (
    <div className="main-container">
      <div className="title">
        <h1>{mainTitle}</h1>
        <p className="subtitle">{subTitle}</p>
      </div>
      <div className="selected-movie-container">
        {selectedMovie && (
          <MovieDetails
            icon={selectedMovie.icon}
            title={selectedMovie.title}
            year={selectedMovie.year}
            genre={selectedMovie.genre}
            description={selectedMovie.description}
          />
        )}
      </div>
      <div className="movie-list-container">
        {movieList &&
          movieList.map((movie) => {
            return (
              <MovieCard
                key={movie.title}
                icon={movie.icon}
                title={movie.title}
                year={movie.year}
                genre={movie.genre}
                description={movie.description}
                onClickHandler={() => setSelectedMovie(movie)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
