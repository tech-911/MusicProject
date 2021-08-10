import React from "react";
import "./sign_up_page.css";
import Join from "../../assets/Join the fun..png";
import Form from "../../components/form_component/form";
class sign_up_page_body extends React.Component {
  constructor() {
    super();
    this.state = {
      label: ["Name: ", "Email: ", "Passwords: ", "Confirm Password: "],
      type: ["text", "email", "password", "password"],
      id: ["displayName", "email", "password", "confirmPassword"],
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { label, type, id } = this.state;

    return (
      <join className="join">
        <wrapperJoin className="wrapJoin">
          <img src={Join} alt="" />
          <formCompo className="form">
            <Form
              info={label}
              handleChange={this.handleChange}
              type={type}
              id={id}
            />
          </formCompo>
        </wrapperJoin>
      </join>
    );
  }
}

export default sign_up_page_body;
