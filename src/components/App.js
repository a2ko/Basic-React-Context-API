import React from "react";
import Nav from "./nav.component";

function App(props) {
  return (
    <div className="App">
      <Nav />
    <div className="container mt-4">
    {props.children}
    </div>
    </div>
  );
}

export default App;
