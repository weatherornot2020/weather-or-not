import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Weather } from "./Weather/Weather";
import { AccountForm } from "./AccountForm/AccountForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Weather or Not!</h1>
      </header>
      <body className="App-body">
        <AccountForm />
        <Weather className="App-weather" />
      </body>
    </div>
  );
}

export default App;
