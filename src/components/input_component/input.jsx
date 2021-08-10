import React from "react";
import "./input.css";
function input(props) {
  return (
    <inputCompo className="inputBody">
      <label for={props.id}>{props.label}</label> <br></br>
      <input type={props.type} id={props.id} onChange={props.handleChange} name={props.name} required/>
    </inputCompo>
  );
}

export default input;
