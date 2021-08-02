import React from "react";
import "./sign_up_page.css";
import Join from "../../assets/Join the fun..png";
import Form from "../../components/form_component/form";
class sign_up_page_body extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: ["Name: ", "Email: ", "Passwords: "],
      arr2: ["text", "email", "password"],
    };
  }
  render() {
    return (
      <join className="join">
        <wrapperJoin className="wrapJoin">
          <img src={Join} alt="" />
          <formCompo className="form">
            <Form info={this.state.arr} type={this.state.arr2} />
          </formCompo>
        </wrapperJoin>
      </join>
    );
  }
}

export default sign_up_page_body;
