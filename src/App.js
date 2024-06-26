import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import React from "react";
// const data = [
//   [true, true, false],
//   [true, false, true],
//   [false, false, false],
// ];

export function App() {
  const baseURL = "http://localhost:3001/";

  const [data, setData] = useState(
    [true, true, true],
    [true, true, true],
    [true, true, true]
  );

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [Color, setColor] = useState([true, true, true]);
  const [Ram, setRam] = useState([true, true, true]);

  function changeRAM(id) {
    setRam([data[id][0], data[id][1], data[id][2]]);
    setColor([true, true, true]);
  }
  function changeColor(id) {
    setColor([data[0][id], data[1][id], data[2][id]]);
    setRam([true, true, true]);
  }

  return (
    <div>
      <div className="w-full h-full bg-black flex py-9 my-9 mb-0 space-x-6 justify-center">
        <div className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100">
          COLOR
        </div>
        <button
          type="button"
          className={Color[0] ? "btn-primary" : "not_av"}
          onClick={() => changeRAM(0)}
        >
          C1
        </button>
        <button
          type="button"
          className={Color[1] ? "btn-primary" : "not_av"}
          onClick={() => changeRAM(1)}
        >
          C2
        </button>
        <button
          type="button"
          className={Color[2] ? "btn-primary" : "not_av"}
          onClick={() => changeRAM(2)}
        >
          C3
        </button>
      </div>
      <div className="w-full h-full bg-black flex py-9 my-9 mt-0 space-x-6 justify-center">
        <div className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100">
          RAM
        </div>
        <button
          type="button"
          className={Ram[0] ? "btn-primary" : "not_av"}
          onClick={() => changeColor(0)}
        >
          R1
        </button>
        <button
          type="button"
          className={Ram[1] ? "btn-primary" : "not_av"}
          onClick={() => changeColor(1)}
        >
          R2
        </button>
        <button
          type="button"
          className={Ram[2] ? "btn-primary" : "not_av"}
          onClick={() => changeColor(2)}
        >
          R3
        </button>
      </div>
    </div>
  );
}

export default App;
