import React from "react";

export default function MovieCard({ title, icon, onClickHandler }) {
  return (
    <div className="movie-card" onClick={onClickHandler}>
      <div className="image-container">
        <img src={icon} alt={title} className="movie-img" />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
      </div>
    </div>
  );
}
