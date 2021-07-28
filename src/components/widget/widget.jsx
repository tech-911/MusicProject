import React from "react";
import "./widget.css";
function widget(props) {
  return (
    <widget className="widgetBody">
      <div>{props.children}</div>
      <div>{props.text}</div>
    </widget>
  );
}

export default widget;
