import { useState } from "react";
import userbase from "userbase-js";
import { useRouter } from "next/router";
import Error from "./Error";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const register = (event) => {
    event.preventDefault();

    userbase
      .signUp({ username, password, rememberMe: "session" })
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <>
      <h2>Register</h2>
      <form id="signup-form" onSubmit={register}>
        <div className="mb-3">
          <label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            <input
              type="password"
              className="form-control"
              required
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <input
          type="submit"
          value="Create new account"
          className="btn btn-primary"
        />
      </form>
      <Error message={error} />
    </>
  );
}

export default Register;
