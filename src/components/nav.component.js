import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark" style={{'background-color':'orange'}}>
      <a href="/" className="navbar-brand">
        React Context-api
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/movies-list">Movies List</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/add-movie">Add Movie</Link></li>
      </div>
      </div>
    </nav>
  );
}
