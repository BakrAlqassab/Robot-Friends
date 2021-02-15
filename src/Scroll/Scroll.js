import React from "react";
function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "3px solid black",
        height: "565px", userSelect: "none"
      }}
    >
      {props.children}
      {/* <h1> Heippa</h1> */}
    </div>
  );
}

export default Scroll;
