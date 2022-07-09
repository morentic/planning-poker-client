import { useState } from "react";
import userbase from "userbase-js";
import { useRouter } from "next/router";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const register = (event) => {
    event.preventDefault();
    console.log("register");

    userbase
      .signUp({ username, password, rememberMe: "session" })
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h2>Register</h2>
      <form id="signup-form" onSubmit={register}>
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
        <input type="submit" value="Create new account" />
      </form>
    </>
  );
}

export default Register;
