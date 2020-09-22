import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="h-screen bg-gray-300 flex-col content-between">
      <Header />
      <div className="text-2xl h-screen-main">
        <SignIn />
      </div>
      <Footer />
    </div>
  );
}

export default App;
