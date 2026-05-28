import React, { useState } from "react";

function design() {
  const [text, setText] = useState("LJ University");
  const [color, setColor] = useState("red");
  const [show, setShow] = useState(true);
  const [btnText, setBtnText] = useState("Hide");

  const changeText = () => {
    setText(text === "LJ University" ? "Welcome students" : "LJ University");
  };

  
  const changeColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };


  const toggleText = () => {
    setShow(!show);
    setBtnText(btnText === "Hide" ? "Show" : "Hide");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h1 style={{ color: color }}>{text}</h1>

      {show && <h2>React Js Hooks</h2>}

      <button onClick={changeText}>
        Change Text
      </button>

      <button onDoubleClick={changeColor} style={{ marginLeft: "10px" }}>
        Change Color
      </button>

      <button onClick={toggleText} style={{ marginLeft: "10px" }}>
        {btnText}
      </button>

    </div>
  );
}

export default design;