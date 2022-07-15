import { useState } from "react";
import userbase from "userbase-js";
import { useRouter } from "next/router";
import Error from "./Error";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = (event) => {
    event.preventDefault();
    setLoading(true);

    userbase
      .signIn({ username, password, rememberMe: "session" })
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <h2>Login</h2>
      <form id="signin-form" onSubmit={login}>
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
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
      <Error message={error} />
    </>
  );
}

export default Login;
