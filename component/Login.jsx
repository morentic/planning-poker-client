import { useState } from "react";
import userbase from "userbase-js";
import { useRouter } from "next/router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = (event) => {
    event.preventDefault();

    userbase
      .signIn({ username, password, rememberMe: "session" })
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h2>Login</h2>
      <form id="signin-form" onSubmit={login}>
        <label>
          <input
            type="text"
            required
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default Login;
