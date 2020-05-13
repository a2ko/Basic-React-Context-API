import React from "react";

export default function Movie(props) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Price: {props.price}</p>
        <p className="card-text">Year: {props.year}</p>
      </div>
    </div>
  );
}
