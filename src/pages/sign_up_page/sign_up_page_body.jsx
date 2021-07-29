import React from "react";
import "./sign_up_page.css";
import Join from "../../assets/Join the fun..png";
import Form from "../../components/form_component/form";
function sign_up_page_body() {
  const arr = ["Name: ", "Email: ", "Passwords: "];
  const arr2=["text", "email", "password"]
  return (
    <join className="join">
      <wrapperJoin className="wrapJoin">
        <img src={Join} alt=""/>
        <formCompo className="form">
          <Form info={arr} type={arr2}/>
        </formCompo>
      </wrapperJoin>
    </join>
  );
}

export default sign_up_page_body;
