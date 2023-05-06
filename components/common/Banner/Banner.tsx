import { FC, useEffect, useRef } from "react";
import s from "./Banner.module.scss";
import Image from "next/image";
import { on } from "stream";

const Banner = () => {
  const commonRef: any = useRef({});
  commonRef.current = {};

  useEffect(() => {
    if (Object.keys(commonRef.current).length === 0) {
      return;
    }
    commonRef.current["videoTag"].defaultMuted = true;
    commonRef.current["videoTag"].muted = true;
  });

  return (
    <div className={`${s.container} `} id="home">
      <div
        className={`${s.text}`}
        data-aos-duration="1500"
        data-aos="slide-right"
        data-aos-delay="150"
        data-aos-offset="200"
      >
        <p className={`${s.safeTxt}`}>DRIVE SAFE</p>
        <p className={`${s.earn}`}>
          AND <span>EARN!</span>
        </p>
      </div>
      <video
        className={s.bannervideo}
        loop={true}
        autoPlay
        muted
        playsInline
        ref={(el: any) => (commonRef.current["videoTag"] = el)}
      >
        <source src="/videos/Smoke.mp4" type="video/mp4" />
      </video>
      <div
        className={s.cardWrapper}
        data-aos-duration="1500"
        data-aos="slide-left"
        data-aos-delay="150"
        data-aos-offset="200"
      >
        <Image src="/images/bannerCar2.png" alt="caR" layout="fill" />
      </div>
      <div className={s.startBtn}>
        <p>Get Started</p>
      </div>
      <div className={s.MobileWrapper}>
        <Image src="/images/mobileCar.png" alt="car" layout="fill" />
      </div>
      <div className={s.mouseWrap}>
        <Image src="/images/mouse.svg" alt="mouse" layout="fill" />
      </div>
      {/* <div className={s.leftText}>
      <p>DRIVESFN</p>
     </div> */}
    </div>
  );
};

export default Banner;
