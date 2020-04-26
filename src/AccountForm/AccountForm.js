import React from "react";
import userbase from "userbase-js";

export const AccountForm = ({ user, setUser }) => {
  const [response, setReponse] = React.useState();
  const [error, setError] = React.useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [verification, setVerification] = React.useState();

  React.useEffect(() => {
    userbase
      .init({ appId: process.env.REACT_APP_USERBASE_APP_ID })
      .then((session) => session.user && setUser(session.user));
  }, [setUser]);

  if (!user && !response) {
    return (
      <div className={"account-form"}>
        <div>Account</div>
        {error && (
          <p style={{ color: "red" }}>{error.message} Please try again.</p>
        )}
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
            type="password"
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
            userbase
              .signUp({ username, password, rememberMe: "local" })
              .then((user) => setUser(user))
              .catch(setError);
          }}
        >
          Register
        </button>
        <button
          disabled={
            !username ||
            !password ||
            !(verification === "real") ||
            !(password.length >= 8)
          }
          onClick={() => {
            userbase
              .signIn({ username, password, rememberMe: "local" })
              .then((user) => setUser(user))
              .catch(setError);
          }}
        >
          Sign In
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
