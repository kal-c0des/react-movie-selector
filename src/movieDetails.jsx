export default function MovieDetails({
  title,
  icon,
  year,
  genre,
  description,
}) {
  return (
    <div className="selected-movie-container">
      <div className="selected-movie-image">
        <img src={icon} alt={title} className="selected-movie-large" />
      </div>
      <div className="selected-movie-info">
        <h2 className="selected-movie-title">{title}</h2>
        <p className="selected-movie-text">
          <strong>Year: </strong>
          {year}
        </p>
        <p className="selected-movie-text">
          <strong>Genre: </strong>
          {genre}
        </p>
        <p className="selected-movie-text">
          <strong>Description: </strong>
          {description}
        </p>
      </div>
    </div>
  );
}
