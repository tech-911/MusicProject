import React from "react";
import "./sign_up_page.css";
import Join from "../../assets/Join the fun..png";
import Form from "../../components/form_component/form";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
class sign_up_page_body extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      label: ["Name: ", "Email: ", "Passwords: ", "Confirm Password: "],
      type: ["text", "email", "password", "password"],
      id: ["displayName", "email", "password", "confirmPassword"],
    };
  }

  ffa = () => {
    return [
      this.state.displayName,
      this.state.email,
      this.state.password,
      this.state.confirmPassword,
    ];
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

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
              handleSubmit={this.handleSubmit}
              value={this.ffa()}
            />
          </formCompo>
        </wrapperJoin>
      </join>
    );
  }
}

export default sign_up_page_body;
