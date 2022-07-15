import userbase from "userbase-js";
import { useRouter } from "next/router";
import Link from "next/link";

function Nav({ user }) {
  const router = useRouter();
  const logout = () => {
    userbase
      .signOut()
      .then(() => {
        router.push("/login");
      })
      .catch((e) => console.error(e));
  };
  console.log(user);
  return (
    <>
      <nav className="navbar navbar-light bg-light navbar-expand">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Planning Poker</a>
          </Link>
          <div className="d-flex">
            {user ? (
              <button onClick={logout} className="btn btn-outline-secondary">
                Logout
              </button>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
