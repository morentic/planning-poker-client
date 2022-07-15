import { useState } from "react";
import userbase from "userbase-js";
import { useRouter } from "next/router";
import Error from "./Error";
import SubmitButton from "./SubmitButton";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (event) => {
    event.preventDefault();

    setLoading(true);

    userbase
      .signUp({ username, password, rememberMe: "session" })
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  };

  return (
    <>
      <h2>Register</h2>
      <form id="signup-form" onSubmit={register}>
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
        <SubmitButton name="Register" loading={loading} />
      </form>
      <Error message={error} />
    </>
  );
}

export default Register;
