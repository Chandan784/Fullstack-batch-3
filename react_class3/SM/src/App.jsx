import { useState } from "react";
import Home from "./components/Home";

function App() {
  let [value, setValue] = useState(0);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Home x={value} y={setValue} z={100} />
      </div>
    </>
  );
}

export default App;
