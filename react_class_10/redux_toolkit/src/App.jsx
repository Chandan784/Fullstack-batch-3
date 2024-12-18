import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllUser } from "./redux/api/user";

function App() {
  // let [userData, setUserData] = useState([]);

  let { data } = useSelector((store) => store.user);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  });

  return (
    <div>
      {data.map((e) => {
        return <h1>{e.name}</h1>;
      })}
    </div>
  );
}

export default App;
