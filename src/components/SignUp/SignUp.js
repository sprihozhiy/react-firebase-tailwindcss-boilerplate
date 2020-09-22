import React from "react";

const SignUp = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex-col">
        <h2 className="text-center py-2">Sign Up</h2>
        <form className="py-2 flex-col">
          <input
            type="email"
            className="rounded my-2 p-1 block"
            placeholder="Email"
          />
          <input
            type="password"
            className="rounded my-2 p-1 block"
            placeholder="Password"
          />
          <input
            type="password"
            className="rounded my-2 p-1 block"
            placeholder="Repeat Password"
          />
          <button className="bg-teal-800 text-white rounded p-1 w-full">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
