import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Weather } from "./Weather/Weather";
import { AccountForm } from "./AccountForm/AccountForm";
import login from "./login.png";

function App() {
  const [user, setUser] = React.useState();

  return (
    <div className="App">
      <header className="App-header">
        <ul className="App-navbar">
          <li>
            <img src={logo} className="App-logo" alt="logo" />
          </li>
          <li className="App-center"></li>
          <li className="App-login">
            <div className="dropdown">
              <span>
                <img src={login} className="App-login2" alt="login" />
              </span>
              <div className="dropdown-content">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <AccountForm user={user} setUser={setUser} />
              </div>
            </div>
          </li>
        </ul>
      </header>
      <body className="App-body">
        <Weather className="App-weather" user={user} />
      </body>
    </div>
  );
}

export default App;
