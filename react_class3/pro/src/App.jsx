import React from "react";
import User from "./components/User";

function App() {
  let userNames = ["chandan", "tapan", "sandeep", "bijaya"];
  return (
    <div>
      <User data={userNames} />
    </div>
  );
}

export default App;
