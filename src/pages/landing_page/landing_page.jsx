import React from "react";
import "./landing_page.css";
import { Link } from "react-router-dom";
import Avatar from "../../assets/landing-page-girl 1.png";
function landing_page() {
  return (
    <container className="container">
      <wrapper className="wrapperBody">
        <img src={Avatar} className="img" alt="" />

        <textWrapper className="textwrap">
          <h1>Feel the music</h1>
          <p className="pforlanding">
            Stream over twenty thousand songs with one click
          </p>
          <Link to="/signup" className="btnforlanding">
            Join Now
          </Link>
        </textWrapper>
      </wrapper>
    </container>
  );
}

export default landing_page;
