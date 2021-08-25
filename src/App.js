import React from "react";
import Landing from "./pages/landing_page/landing_page";
import Main from "./pages/main_page/main_page";
import SignUp from "./pages/sign_up_page/sign_up_page";
import Error from "./pages/404/error_pages";
import Nav from "./components/nav_component/nav";
import SignIn from "./pages/signIn_page/signin_page";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(userAuth);
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
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.props.currentUser ? <Redirect to="/main" /> : <Landing />
            }
          />
          <Route
            exact
            path="/home"
            render={() =>
              this.props.currentUser ? <Redirect to="/main" /> : <Landing />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/main" /> : <SignUp />
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/main" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/main"
            render={() =>
              !this.props.currentUser ? <Redirect to="/home" /> : <Main />
            }
          />
          <Route exact path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
