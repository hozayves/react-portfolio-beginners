import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}
