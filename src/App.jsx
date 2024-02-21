import { useState } from "react";
import movieEntries from "./movie";
import MovieDetails from "./components/MovieDetails.jsx";

import "./App.css";
import Movies from "./components/Movies.jsx";

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
      <Movies movieList={movieList} onMovieClick={setSelectedMovie} />
    </div>
  );
}

export default App;
