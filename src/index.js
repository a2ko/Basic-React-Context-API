import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./components/home.component";
import MoviesList from "./components/MoviesList.component";
import { MoviesProvider } from "./contexts/movies.context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Route exact path="/" component={home} />
        <MoviesProvider>
        <Route path="/movies-list" component={MoviesList} />
        <Route path="/add-movie" component={home} />
        </MoviesProvider>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
