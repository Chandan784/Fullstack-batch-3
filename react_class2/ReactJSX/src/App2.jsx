import React from "react";
import x from "./App2.module.css";

function App2() {
  return (
    <div>
      <h1 id={`${x.head}`} className={`${x.head}`}>
        heading 2
      </h1>

      <h2 className={`${x.diff}`}>chandan samantaray</h2>

      <div className="navbar"></div>
    </div>
  );
}

export default App2;
