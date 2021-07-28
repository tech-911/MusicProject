import React from "react";
import "./explore_component.css";
import Widget from "../widget/widget";
function explore_component(props) {
  return (
    <contianerExplore className="explore">
      <h1>{props.title}</h1>
      <Widget/>
      <div>{props.base}</div>
    </contianerExplore>
  );
}

export default explore_component;
