import React from "react";

import Card from "./components/Card/Card";
import rozesUnderTheGraveCover from "./components/Card/rozes-utg.jpg";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Card
        imgSrc={rozesUnderTheGraveCover}
        artist={"Rozes"}
        artistClass={"Solista"}
        albumName={"Under the grave"}
        year={"(2016)"}
        buttonText={"Dance"}
      />
    </div>
  );
}

export default App;
