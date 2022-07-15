import Nav from "./Nav";
import { UserContext } from "../component/Contexts";
import Login from "./Login";
import Register from "./Register";
import { useContext } from "react";

export default function Layout({ children }) {
  const user = useContext(UserContext);
  if (user) {
    return (
      <>
        <Nav user={user} />
        <main className="container mt-3">{children}</main>
      </>
    );
  }

  return (
    <>
      <Nav user={user} />
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col mt-3">
              <Login></Login>
            </div>
            <div className="col mt-3">
              <Register></Register>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
