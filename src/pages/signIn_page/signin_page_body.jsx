import React from "react";
import "./signin_page.css";
import Sign from "../../assets/SignIn to fun..png";
import Form from "../../components/form_component/form";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle} from "../../firebase/firebase.utils";
class signin extends React.Component {
  constructor() {
    super();
    this.state = {
      label: ["Email: ", "Passwords: "],
      type: ["email", "password"],
      id: ["email", "password"],
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
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
          <div className="signinleft">
            <img src={Sign} style={{ width: "85%" }} alt="" />
            <span onClick={signInWithGoogle} className="signinwithgoogle">
              <FcGoogle id="icon" size="30px" />
              <span style={{ color: "white" }}>SignIn with Google</span>
            </span>
          </div>

          <formCompo className="form">
            <Form
              info={label}
              handleChange={this.handleChange}
              type={type}
              id={id}
              handleSubmit={this.handleSubmit}
            />
          </formCompo>
        </wrapperJoin>
      </join>
    );
  }
}

export default signin;
