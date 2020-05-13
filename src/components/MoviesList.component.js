import React, { useContext } from "react";
import Movie from "./Movie";
import { MoviesContext } from "../contexts/movies.context";

export default function MoviesList() {
  const [movies, setMovies] = useContext(MoviesContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie title={movie.title} price={movie.price} year={movie.year} />
      ))}
    </div>
  );
}
