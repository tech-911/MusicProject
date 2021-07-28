import React from "react";
import Nav from "../../components/nav_component/nav";
import MainBody from "../main_page/main_page_body";
import Footer from "../../components/footter_component/footer_component";

function main_page() {
  return (
    <div className="arrange">
      <Nav />
      <MainBody />
      <Footer />
    </div>
  );
}

export default main_page;
