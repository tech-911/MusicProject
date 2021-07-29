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
          <FaMicrophone size="1.5em" />
        </Widget>
        <Widget icon="" text="Albums">
          <FaBook size="1.5em" />
        </Widget>
        <Widget icon="" text="More">
          <FaMicrochip size="1.5em" />
        </Widget>
      </widgetContainer>

      <div>{props.base}</div>
    </contianerExplore>
  );
}

export default explore_component;
