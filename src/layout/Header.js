import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="mx-auto p-4 h-screen/10 flex justify-between bg-teal-400 font-semibold">
      <NavLink className="logo text-white" to="/">
        Logo
      </NavLink>
      <ul className="flex content-between">
        <li className="px-1 text-white cursor-pointer hover:underline">
          <NavLink to="/">Sign In</NavLink>
        </li>
        <li className="px-1 text-white cursor-pointer hover:underline">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
      {/* <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={UserDashboard} />
      </Switch> */}
    </nav>
  );
};

export default Header;
