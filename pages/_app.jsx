import userbase from "userbase-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../component/Contexts";
import Layout from "../component/Layout";
import "../styles/_base.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    userbase
      .init({
        appId: process.env.NEXT_PUBLIC_USERBASE_APP_ID,
      })
      .then((session) => {
        if (!session.user) {
          if (router.pathname !== "/login") router.push("/login");
        }
        setUser(session.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [router]);

  return (
    <UserContext.Provider value={user}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
