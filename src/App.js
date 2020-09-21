import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="h-screen bg-gray-300 flex-col content-between">
      <Header />
      <h1 className="text-2xl h-screen-main bg-orange-300">
        React + Firebase + TailwindCSS Boilerplate
      </h1>
      <Footer />
    </div>
  );
}

export default App;
