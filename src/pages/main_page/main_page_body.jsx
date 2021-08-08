import React from "react";
import "./main_page.css";
import Explore from "../../components/explore_component/explore_component";
import Album from "../../assets/cover.png";
function main_page_body() {
  return (
    <container className="mainBody">
      <wrapperMain className="wrapperMain">
        <Explore
          title="Discover new music"
          base="BY JOINING YOU CAN BENEFIT BY LISTENING TO THE LATEST ALBUM RELESED"
        />
        <img src={Album} alt="" className="sideImg" />
      </wrapperMain>
    </container>
  );
}

export default main_page_body;
