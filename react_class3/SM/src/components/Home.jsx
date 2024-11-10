import React from "react";

function Home({ x, y }) {
  function addNum() {
    y(x + 1);
  }

  function subNum() {
    y(x - 1);
  }
  return (
    <div>
      <h1 style={{ fontSize: "80px" }}>{x}</h1>

      <button onClick={addNum}>Add</button>
      <button onClick={subNum}>Subsctract</button>
    </div>
  );
}

export default Home;
