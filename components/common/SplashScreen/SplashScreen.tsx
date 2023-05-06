import { FC } from "react";
import s from "./SplashScreen.module.scss";

const SplashScreen: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.loaderbg}>
        <div className={s.loader}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
