import React from "react";
import "./input.css";
function input(props) {
  return (
    <inputCompo className="inputBody">
      <label for="fname">{props.title}</label> <br></br>
      <input type={props.type} id="fname" name="fname" />
    </inputCompo>
  );
}

export default input;
