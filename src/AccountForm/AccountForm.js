import React from "react";
import userbase from "userbase-js";

export const AccountForm = () => {
  const [user, setUser] = React.useState();
  const [response, setReponse] = React.useState();
  const [error, setError] = React.useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [verification, setVerification] = React.useState();

  const [showRegister, setShowRegister] = React.useState();

  const registerClassname = showRegister ? "selected" : "deselected";
  const signinClassname = showRegister ? "deselected" : "selected";

  React.useEffect(() => {
    userbase
      .init({ appId: process.env.REACT_APP_USERBASE_APP_ID })
      .then((session) => session.user && setUser(session.user));
  }, []);

  if (!user && !response && !error) {
    return (
      <div className={"account-form"}>
        <div>
          <span
            className={registerClassname}
            onClick={() => {
              if (!showRegister) setShowRegister(true);
            }}
          >
            Create Account
          </span>
          &nbsp;|&nbsp;
          <span
            className={signinClassname}
            onClick={() => {
              if (showRegister) setShowRegister(false);
            }}
          >
            Sign In
          </span>
        </div>
        <label htmlFor="uname">
          Username:{" "}
          <input
            id="uname"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:{" "}
          <input
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />{" "}
          {password &&
            password.length < 8 &&
            "Password must be at least 8 characters long"}
        </label>
        <br />
        <label htmlFor="verification">
          Type "real":{" "}
          <input
            id="verification"
            onChange={(event) => setVerification(event.target.value)}
          />
        </label>
        <br />
        <button
          disabled={
            !username ||
            !password ||
            !(verification === "real") ||
            !(password.length >= 8)
          }
          onClick={() => {
            console.log(username, password, verification);
            if (showRegister) {
              userbase
                .signUp({ username, password, rememberMe: "local" })
                .then((user) => setUser(user))
                .catch(setError);
            } else {
              userbase
                .signIn({ username, password, rememberMe: "local" })
                .then((user) => setUser(user))
                .catch(setError);
            }
          }}
        >
          {showRegister ? "Register" : "Sign In"}
        </button>
      </div>
    );
  } else if (user) {
    return (
      <div className={"account-form"}>
        <p>Signed in as {user.username}</p>
        <button
          onClick={() =>
            userbase
              .signOut()
              .then(() => {
                setUser(null);
                setError(null);
                setReponse(null);
              })
              .catch(setError)
          }
        >
          Sign Out
        </button>
      </div>
    );
  } else if (error) {
    return <div className={"account-form"}>{JSON.stringify(error)}</div>;
  }
  return null;
};
