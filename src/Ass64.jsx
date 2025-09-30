import "./App.css";
import { useState } from "react";

export default function Ass64() {
  let [size, setSize] = useState(10); // Start from 10px

  function sizeIncrease(action) {
    if (action === "+") {
      setSize(size + 10);
    } else {
      if (size > 0) {
        setSize(size - 10);
      }
    }
  }

  return (
    <>
      <div className="mb-3">
        <button
          className="btn btn-danger mx-2 custom-btn"
          onClick={() => sizeIncrease("+")}
        >
          Increase Size
        </button>

        <button
          className="btn btn-danger custom-btn"
          disabled={size === 0}
          onClick={() => sizeIncrease("-")}
        >
          Decrease Size
        </button>
      </div>

      <div className="mb-2 fw-bold text-center">
        {size}px × {size}px
      </div>

      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: "skyblue",
          transition: "all 0.2s ease-in-out",
        }}
        className="block mx-auto"
      ></div>
    </>
  );
}
