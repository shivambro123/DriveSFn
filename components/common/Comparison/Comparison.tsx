import React, { FC } from "react";
import s from "./Comparison.module.scss";
import Image from "next/image";

const Comparison: FC = () => {
  return (
    <div className={`${s.container}`} id="aboutus">
      <div
        className={`${s.mobWrap} aos-none-mobile`}
        data-aos-duration="1500"
        data-aos="fade-up-right"
      >
        <Image src="/images/comparisonleft.svg" alt="image" layout="fill" />
      </div>
      <div
        className={`${s.mobWrapResponsive} aos-none-mobile`}
        data-aos-duration="1000"
        data-aos="fade-up-right"
      >
        <Image src="/images/mobCOmp.svg" alt="image" layout="fill" />
      </div>
      <div
        className={`${s.content} aos-none-mobile`}
        data-aos-duration="1000"
        data-aos="zoom-in-left"
      >
        <h1>OUR MOTIVATION</h1>
        <p>
          It’s a well known fact that in many countries breaking the speed limit
          may incur a penalty of some kind. In most cases this comes in the form
          of a financial cost to the driver. What if this same notion was
          flipped on it’s head, what if we could financially reward motorists
          for good driving? It’s been proven time and again that the carrot
          works better than a stick. Think of DriveSfn as the carrot, which
          incentivises drivers to be more responsible, by taking the financial
          stick being used by law enforcement agencies all over the world and
          turning into a $DriveS shaped carrot.
        </p>
        {/* <div className={s.after}>
          <Image
            src="/images/rightafter.png"
            alt="exhaust"
            width={350}
            height={300}
          />
        </div> */}
      </div>
      <div className={s.exhaust}>
        <Image
          src="/images/exhaust.png"
          alt="exhaust"
          width={300}
          height={250}
        />
      </div>
    </div>
  );
};

export default Comparison;
