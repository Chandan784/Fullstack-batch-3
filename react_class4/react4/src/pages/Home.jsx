import React from "react";
import { useRef, useState } from "react";

function Home() {
  let nameRef = useRef();

  let [userName, setUerName] = useState("");
  let name;

  function getName(e) {
    e.preventDefault();

    console.log(nameRef);

    name = nameRef.current.value;

    console.log(name);

    setUerName(name);
  }

  return (
    <div>
      <h1>chandan</h1>

      <form action="">
        <input ref={nameRef} type="text" placeholder="enter your name" />

        <button onClick={getName}>submit</button>
      </form>

      {userName}
    </div>
  );
}

export default Home;
