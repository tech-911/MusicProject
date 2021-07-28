import React from "react";
import "./explore_component.css";
import Widget from "../widget/widget";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMicrophone,
  FaBook,
  FaMicrochip,
} from "react-icons/fa";

function explore_component(props) {
  return (
    <contianerExplore className="explore">
      <h1>{props.title}</h1>
      <widgetContainer className="wid">
        <Widget icon="" text="Charts">
          <FaMicrophone />
        </Widget>
        <Widget icon="" text="Albums">
          <FaBook />
        </Widget>
        <Widget icon="" text="More">
          <FaMicrochip />
        </Widget>
      </widgetContainer>

      <div>{props.base}</div>
    </contianerExplore>
  );
}

export default explore_component;
