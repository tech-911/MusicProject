import React from "react";
import "./nav.css";
import logo from "../../assets/Logo.png";
import {withRouter} from "react-router-dom";

function nav({match, history}) {
  console.log()
  return (
    <container className="nav">
      <wrapper className="wrapper">
        <firstnav onClick={()=>history.push(`/home`)} className="fst">
          <img className="imgfornav" src={logo} alt="" title="logo" height="80%" width="40%" />
          <p>sound wave</p>
        </firstnav>
        <secondnav className="scnd">
          <a href="" onClick={()=>history.push(`/main`)}>Discover</a>
          <a href="" onClick={()=>history.push(`/signup`)}>Join</a>
        </secondnav>
      </wrapper>
    </container>
  );
}

export default withRouter(nav);
