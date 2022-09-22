import "./App.css";
import React, { useState } from "react";
import { Component } from "./Component";

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setDisplay(!display)}>Display</button>
      {display && <Component />}
    </div>
  );
}

export default App;
