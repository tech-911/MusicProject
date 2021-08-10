import React from "react";
import Landing from "./pages/landing_page/landing_page";
import Main from "./pages/main_page/main_page";
import SignUp from "./pages/sign_up_page/sign_up_page";
import Error from "./pages/404/error_pages";
import Nav from "./components/nav_component/nav";
import SignIn from "./pages/signIn_page/signin_page"
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
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

export default App;
