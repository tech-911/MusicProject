import React from "react";
import Nav from "../../components/nav_component/nav";
import Body from "./landing_body_page";
import "./landing_page.css"
function landing_page() {
  return (
    <div>
      <Nav />
      <Body />
    </div>
  );
}

export default landing_page;
