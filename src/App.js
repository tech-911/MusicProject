import React from "react";
import Landing from "./pages/landing_page/landing_page";
import Main from "./pages/main_page/main_page";
import SignUp from "./pages/sign_up_page/sign_up_page";
import Error from "./pages/404/error_pages";
import Nav from "./components/nav_component/nav";
import SignIn from "./pages/signIn_page/signin_page";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    // console.log("i was fired at App.js line 28 thats me ! unmounting")
  }

  render() {
    return (
      <div>
        <Nav currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </div>
    );
  }
}

export default App;
