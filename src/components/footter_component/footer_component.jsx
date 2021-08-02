import React from "react";
import "./footer_component.css";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";

function footer_component() {
  return (
    <container className="containerfoot">
      <wrapper className="wrapperfoot">
        <firstfoot className="_fst">
          <a href="" className="txt">
            About Us
          </a>
          <a href="" className="txt">
            contacts
          </a>
        </firstfoot>

        <secondfoot className="_scnd">
          <FaTwitter color="white" size="0.8em" />
          <a id="ht" href="../../pages/404/error_pages">
            Twitter
          </a>
          <FaFacebookSquare color="white" size="0.8em" />
          <a href="https://web.facebook.com/">Face book</a>
        </secondfoot>
      </wrapper>
    </container>
  );
}

export default footer_component;
