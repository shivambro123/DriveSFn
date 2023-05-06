import FC, { useEffect, useRef } from "react";
import s from "./Statistics.module.scss";
import Image from "next/image";
// import ThreeSixty from "react-360-view";
import dynamic from "next/dynamic";
import CarRotate from "./CarRotate";
import gsap from "gsap";

const ThreeSixty: any = dynamic(() => import("react-360-view"), {
  ssr: false,
});

const Statistics = () => {
  const commonRef: any = useRef({});
  commonRef.current = {};

  useEffect(() => {
    if (
      commonRef.current["Statistics"].children &&
      commonRef.current["Statistics"].children.length === 0
    ) {
      return;
    }

    // # enable this section if want to pin section
    // gsap.to(commonRef.current["Statistics"], {
    //   scrollTrigger: {
    //     start: "top top",
    //     end: "+=600",
    //     pin: true,
    //     // markers: true,
    //     scrub: true,
    //     trigger: commonRef.current["Statistics"],
    //   },
    // });
  }, []);

  return (
    <div
      className={`${s.container} boxed`}
      ref={(el) => (commonRef.current["Statistics"] = el)}
    >
      <h1>STATISTICS</h1>
      <div className={s.available}>
        <div className={s.logoWrap}>
          <Image
            src="/images/appstore.png"
            alt="image"
            width={120}
            height={35}
          />
        </div>
        <div className={s.logoWrap}>
          <Image
            src="/images/playstore.png"
            alt="image"
            width={120}
            height={35}
          />
        </div>
      </div>
      <CarRotate />
      <div className={s.carWrap} data-aos="zoom-in" data-aos-duration="1300">
        {/* <Image src="/images/statisticsCar.svg" alt="image" layout="fill" /> */}
      </div>
      <div className={s.carWrapMob} data-aos="zoom-in" data-aos-duration="1300">
        <Image src="/images/mobileCar.png" alt="image" layout="fill" />
      </div>
      <div className={`${s.specs1} aos-none-mobile`} data-aos="slide-right">
        <h2>1300294 KM</h2>
        <p>TOTAL DRIVEN DISTANCE</p>
      </div>
      <div className={`${s.specs2} aos-none-mobile`} data-aos="slide-left">
        <h2>60%</h2>
        <p>PERCENTAGE SAFE DRIVES</p>
      </div>
      <div className={`${s.specs3} aos-none-mobile`} data-aos="slide-right">
        <h2>780176 KM</h2>
        <p>SAFE DISTANCE DRIVEN</p>
      </div>
      <div className={`${s.specs4} aos-none-mobile`} data-aos="slide-left">
        <h2>2345973$DRIVES</h2>
        <p>SAFE DRIVING REWARDS TO DATE</p>
      </div>
    </div>
  );
};

export default Statistics;
