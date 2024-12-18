import React from "react";
import { useContext } from "react";
import Store from "../store/store";

function CompB() {
  let { name, numbers, score, getName } = useContext(Store);

  return <div>{getName()}</div>;
}

export default CompB;
