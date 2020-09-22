import React from "react";

const Header = () => {
  return (
    <div className="mx-auto p-4 h-screen/10 flex justify-between bg-teal-400 font-semibold">
      <div className="logo text-white">Logo</div>
      <ul className="flex content-between">
        <li className="px-1 text-white">Sign Up</li>
        <li className="px-1 text-white">Sign In</li>
      </ul>
    </div>
  );
};

export default Header;
