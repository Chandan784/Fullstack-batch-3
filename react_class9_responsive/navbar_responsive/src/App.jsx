import React, { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

function App() {
  let [display, setDisplay] = useState("hidden");

  function handelBarClick() {
    if (display == "hidden") {
      setDisplay("block");
    } else {
      setDisplay("hidden");
    }
  }

  return (
    <div>
      <div className="navbar flex  px-8 justify-between items-center h-20 bg-gray-900 text-white">
        <div className="logo">
          <h1 className="  text-2xl font-bold">Applute</h1>
        </div>

        <div className="navlist">
          {display == "hidden" ? (
            <FaBars className="  lg:hidden  " onClick={handelBarClick} />
          ) : (
            <ImCross className="  lg:hidden  " onClick={handelBarClick} />
          )}

          <ul className=" flex gap-4  text-xl hidden lg:block lg:flex">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={` py-8 mobile navlist h-screen bg-gray-900  text-white w-1/2 absolute right-0  text-center ${display} `}
      >
        <ul className=" flex flex-col gap-4 lg:block text-xl font-semibold ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
