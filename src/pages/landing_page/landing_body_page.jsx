import React from "react";
import "./landing_page.css";
import Avatar from "../../assets/landing-page-girl 1.png";
function landing_page() {
  return (
    <container className="container">
      <wrapper className="wrapperBody">
        <img src={Avatar} className="img" alt="" />

        <textWrapper className="textwrap">
          <h1>Feel the music</h1>
          <p>Stream over twenty thousand songs with one click</p>
          <button className="btn">Join Now</button>
        </textWrapper>
      </wrapper>
    </container>
  );
}

export default landing_page;
