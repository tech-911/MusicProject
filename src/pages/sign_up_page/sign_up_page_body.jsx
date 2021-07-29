import React from "react";
import "./sign_up_page.css";
import Join from "../../assets/Join the fun..png";
import Form from "../../components/form_component/form";
function sign_up_page_body() {
  return (
    <join className="join">
      <wrapperJoin className="wrapJoin">
        <img src={Join} />
        <formComponent className="form">
          <Form />
        </formComponent>
      </wrapperJoin>
    </join>
  );
}

export default sign_up_page_body;
