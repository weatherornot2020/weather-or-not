import React from "react";
import logo from "./logo.png";
import login from "./login.png";
import "./App.css";
import { Weather } from "./Weather/Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="App-navbar">
          <li>
            <img src={logo} className="App-logo" alt="logo" />
          </li>
          <li className="App-center">
            <h1>Weather or Not</h1>
          </li>
          <li className="App-login">
            <div class="dropdown">
              <span>
                <img src={login} className="App-login2" alt="login" />
              </span>
              <div class="dropdown-content">
                <a href="#">Login</a>
              </div>
            </div>
          </li>
        </ul>
      </header>
      <body className="App-body">
        <Weather className="App-weather" />
      </body>
    </div>
  );
}

export default App;
