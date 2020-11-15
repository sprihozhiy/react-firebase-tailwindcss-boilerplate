import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex-col">
        <h2 className="text-center py-2">Sign In</h2>
        <form className="p-4 flex-col border-solid border-2 border-white">
          <input
            type="email"
            className="rounded my-2 p-1 block"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="rounded my-2 p-1 block"
            placeholder="Password"
            required
          />
          <button className="bg-teal-800 text-white rounded p-1 w-full">
            Login
          </button>
          <p className="text-sm text-blue-700 py-2"><Link to="/forgotpassword">Forgot Password?</Link></p>
        </form>
        <div className="flex-col py-2">
          <p className="text-sm text-center">If you do not have an account, please, <Link to="/signup" className="text-blue-700">sign up</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export default SignIn;
