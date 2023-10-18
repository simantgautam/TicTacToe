import React from "react";

function Square(props) {
  return (
    <button
      style={{
        height: "100px",
        width: "100px",
        textAlign: "center",
        lineHeight: "100px",
        fontSize: "25px",
      }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;
