import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { currentUser, logout } = useAuth();
  const history = useHistory()

  async function handleLogout() {
      try {
      await logout()
      history.push("/signin")
      } catch {
      console.log("Failed to log out")
      }
  }

  return (
    <nav className="mx-auto p-4 h-screen/10 flex justify-between bg-teal-400 font-semibold">
      <NavLink className="logo text-white" to="/">
        Logo
      </NavLink>
      {currentUser ? 
      <ul className="flex content-between">
        <li className="px-1 text-white cursor-pointer hover:underline">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="px-1 text-white cursor-pointer hover:underline">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="px-1 text-white cursor-pointer hover:underline">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm" onClick={handleLogout}>Log Out</button>
        </li>
      </ul> 
      : 
      null
       }
    </nav>
  );
};

export default Header;
