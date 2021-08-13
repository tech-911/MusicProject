import React from "react";
import "./signin_page.css";
import Sign from "../../assets/SignIn to fun..png";
import Form from "../../components/form_component/form";
import { FcGoogle } from "react-icons/fc";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
class signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      label: ["Email: ", "Passwords: "],
      type: ["email", "password"],
      id: ["email", "password"],
    };
  }

  ffa = () => {
    return [this.state.email, this.state.password];
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
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
              value={this.ffa()}
            />
          </formCompo>
        </wrapperJoin>
      </join>
    );
  }
}

export default signin;
