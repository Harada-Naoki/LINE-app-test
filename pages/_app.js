import "../styles/globals.css";
import { useState, useEffect } from "react";
import liff from "@line/liff";

function MyApp({ Component, pageProps }) {
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);

  useEffect(() => {
    console.log("start liff.init()...");
    const liffId = process.env.NEXT_PUBLIC_LIFF_ID; // LIFF ID を環境変数から取得

    if (!liffId) {
      console.error("LIFF ID is not defined. Please set NEXT_PUBLIC_LIFF_ID.");
      setLiffError("LIFF ID is not defined.");
      return;
    }

    liff
      .init({ liffId })
      .then(() => {
        console.log("liff.init() done");
        setLiffObject(liff);

        // ログインチェック
        if (!liff.isLoggedIn()) {
          console.log("User is not logged in. Redirecting to login...");
          liff.login(); // ログインページにリダイレクト
        }
      })
      .catch((error) => {
        console.error("liff.init() failed:", error);
        setLiffError(error.toString());
      });
  }, []);

  pageProps.liff = liffObject;
  pageProps.liffError = liffError;

  return <Component {...pageProps} />;
}

export default MyApp;

