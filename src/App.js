import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <h1 className="text-2xl h-1/2 bg-orange-300">
        React + Firebase + TailwindCSS Boilerplate
      </h1>
      <Footer />
    </div>
  );
}

export default App;
