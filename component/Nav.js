import userbase from "userbase-js";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  const logout = () => {
    userbase
      .signOut()
      .then(() => {
        router.push("/login");
      })
      .catch((e) => console.error(e));
  };
  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Nav;
