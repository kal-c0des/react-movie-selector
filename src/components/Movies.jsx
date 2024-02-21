import MovieCard from "./MovieCard";

export default function Movies({ movieList, onMovieClick }) {
  return (
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
              onClickHandler={() => onMovieClick(movie)}
            />
          );
        })}
    </div>
  );
}
