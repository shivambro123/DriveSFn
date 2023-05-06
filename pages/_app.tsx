import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "../styles/theme.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
// import LoadingScreen from "@components/common/LoadingScreen";
import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.onload = (event) => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      console.log("hi--");
      AOS.refresh();
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Fragment>
        {/* <CustomCursor /> */}
        <Component {...pageProps} />
      </Fragment>
    </>
  );
}

export default MyApp;
