import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="h-screen bg-gray-300 flex-col content-between">
      <Header />
      <div className="text-2xl h-screen-main">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/dashboard" component={UserDashboard} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
