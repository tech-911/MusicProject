import React from "react";
import "./nav.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

function nav(props) {
  return (
    <container className="nav">
      <wrapper className="wrapper">
        <Link to="/home">
          <firstnav className="fst">
            <img
              className="imgfornav"
              src={logo}
              alt=""
              title="logo"
              height="80%"
              width="40%"
            />
            <p>sound wave</p>
          </firstnav>
        </Link>

        <secondnav className="scnd">
          <Link to="/main">Discover</Link>
          <Link to="/signup">Join</Link>
          {props.currentUser ? (
            <span
              onClick={() => {
                auth.signOut();
              }}
            >
              SignOut
            </span>
          ) : (
            <Link to="/signin">SignIn</Link>
          )}
        </secondnav>
      </wrapper>
    </container>
  );
}

export default nav;
