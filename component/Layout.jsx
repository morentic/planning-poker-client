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
        <Nav />
        <main>{children}</main>
      </>
    );
  }

  return (
    <>
      <Login />
      <Register />
    </>
  );
}
