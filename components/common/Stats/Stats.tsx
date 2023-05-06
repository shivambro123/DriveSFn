import React from "react";
import s from "./Stats.module.scss";
import Image from "next/image";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className={`${s.container} `}>
      <div className={`${s.content}  `}>
        <div className={s.list}>
          <ul>
            <li>Emphasis Is On Driving Safely, Not To Encourage Driving.</li>
            <li>Considers Environmental Benefits.</li>
            <li>Rewards Safely Driven Miles Only.</li>
            <li>Navigation Based Interface.</li>
            <li>Aimed At Reducing Fuel Consumtion.</li>
            <li>Aimed At Reducing Road Traffic Accidents.</li>
            <li>Aimed At Reducing Fuel Emissions.</li>
          </ul>
        </div>
        <div className={s.initialturn}>
          <div className={s.turncard}>
            <div className={s.benefits}>
              <h1>DRIVESFN</h1>
              <div className={s.tick}>
                <Image
                  src="/images/tick.svg"
                  alt="tick"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/tick.svg"
                  alt="tick"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/tick.svg"
                  alt="tick"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/tick.svg"
                  alt="tick"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/tick.svg"
                  alt="tick"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/tick.svg"
                  alt="tick"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/tick.svg"
                  alt="tick"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className={s.nobenefits}>
              <h1>OTHER DRIVE 2 EARN TOKENS</h1>
              <div className={s.tick}>
                <Image
                  src="/images/wrong.svg"
                  alt="wrong"
                  width={40}
                  height={40}
                />
              </div>
              {/* Deploy */}
              <div className={s.tick}>
                <Image
                  src="/images/wrong.svg"
                  alt="wrong"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/wrong.svg"
                  alt="wrong"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/wrong.svg"
                  alt="wrong"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/wrong.svg"
                  alt="wrong"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/wrong.svg"
                  alt="wrong"
                  width={40}
                  height={40}
                />
              </div>
              <div className={s.tick}>
                <Image
                  src="/images/wrong.svg"
                  alt="wrong"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
