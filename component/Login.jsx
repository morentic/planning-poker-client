import { useState } from "react";
import userbase from "userbase-js";
import { useRouter } from "next/router";
import Error from "./Error";
import SubmitButton from "./SubmitButton";

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
        setLoading(false);
      });
  };

  return (
    <>
      <h2>Login</h2>
      <form id="signin-form" onSubmit={login}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            disabled={loading}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            required
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            disabled={loading}
          />
        </div>
        <SubmitButton name="Login" loading={loading} />
      </form>
      <Error message={error} />
    </>
  );
}

export default Login;
