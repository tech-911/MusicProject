import React from "react";
import "./nav.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

function nav({currentUser}) {
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
          {currentUser ? (
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
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(nav);
