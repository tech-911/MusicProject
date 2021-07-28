import React from "react";
import "./nav.css";
import logo from "../../assets/Logo.png";

function nav() {
  return (
    <container className="nav">
      <wrapper className="wrapper">
        <firstnav className="fst">
          <img src={logo} alt="" title="logo" height="96%" width="40%" />
          <p>sound wave</p>
        </firstnav>
        <secondnav className="scnd">
          <a href="">Discover</a>
          <a href="">Join</a>
        </secondnav>
      </wrapper>
    </container>
  );
}

export default nav;
