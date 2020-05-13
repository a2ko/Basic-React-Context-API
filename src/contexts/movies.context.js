import React, { createContext, useState } from "react";

export const MoviesContext = createContext();

export function MoviesProvider(props) {
  const [movies, setMovies] = useState([
    {
      title: "Hero In the Piro",
      year: 2018,
      price: 2.5,
    },
    {
      title: "Papsi Man",
      year: 2016,
      price: 2.5,
    },
    {
      title: "Hkona matata",
      year: 2020,
      price: 2.5,
    },
    {
      title: "!Impossible Mission",
      year: 2020,
      price: 2.5,
    },
  ]);

  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MoviesContext.Provider>
  );
}
