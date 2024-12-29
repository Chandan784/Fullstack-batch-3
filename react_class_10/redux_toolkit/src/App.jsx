import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllUser } from "./redux/api/user";
import { getSingleUser } from "./redux/slice/userSlice";

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
