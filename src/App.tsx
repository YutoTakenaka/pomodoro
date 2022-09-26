import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "twin.macro";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo h-48 w-48" alt="logo" />
        <p className="text-gray-700">This is Pomodoro Timer !</p>
      </header>
    </div>
  );
}

export default App;
