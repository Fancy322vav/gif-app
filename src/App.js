import React from "react";
import RandomV2 from "./components/RandomV2";
import TagV2 from "./components/TagV2";

import "./App.css";

const App = () => (
  <div>
    <h1>Random GIF App</h1>
    <div className="main-container">
      <RandomV2 />
      <TagV2 />
    </div>
  </div>
);

export default App;
