import { FC, useEffect, useState } from "react";
import s from "./PageLoader.module.scss";

const PageLoader: FC = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 400);
      document.body.classList.add("page-loaded");
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className={`${s.container} ${pageLoaded ? s.loaded : ""}`}>
      <div className={s.loader} />
    </div>
  );
};

export default PageLoader;
