import React from "react";
import s from "./Roadmap.module.scss";
import Image from "next/image";

const Roadmap = () => {
  return (
    <div className={`${s.container} `} id="roadmap">
      <h1 className={`${s.heading}`} data-aos="slide-bottom">
        ROADMAP
      </h1>
      <div className={s.speed}>
        <Image
          src="/images/speedLimit.svg"
          alt="speed"
          width={50}
          height={50}
        />
      </div>
      <div className={s.bgWrap}>
        <Image src="/images/roadmapBg.svg" alt="image" layout="fill" />
      </div>
      <div className={s.bgWrapMob}>
        <Image src="/images/roadmapBgMob.svg" alt="image" layout="fill" />
      </div>
      {/* <div className={s.car}>
        <Image
          src="/images/roadmapCar.svg"
          alt="image"
          width={140}
          height={65}
        />
      </div> */}
      <div className={s.carMob}>
        <Image src="/images/mobileCar.png" alt="image" width={45} height={75} />
      </div>
      <div className={`${s.phase1} aos-none-mobile `} data-aos="slide-right">
        <p>PHASE 1</p>
        <ul>
          <li>MVP Release</li>
          <li>Team Testing</li>
          <li>Release website</li>
          <li>Community building kick-off</li>
          <li>Early bird investing rounds</li>
        </ul>
      </div>
      <div className={`${s.phase2} aos-none-mobile `} data-aos="slide-left">
        <p>PHASE 2</p>
        <ul>
          <li>Alpha release</li>
          <li>Seed & Strategic investment rounds</li>
          <li>Closed QA Testing</li>
          <li>Strategic partnership building</li>
          <li>Initial Marketing campaign</li>
          <li>User Acquisition kick-off</li>
        </ul>
      </div>
      <div className={`${s.phase3} aos-none-mobile `} data-aos="slide-right">
        <p>PHASE 3</p>
        <ul>
          <li>Initial KOL onboarding</li>
          <li>Begin marketing assault</li>
          <li>Private & Public Sale rounds</li>
          <li>Beta Release</li>
          <li>Begin public Pilot tests (1000 users)</li>
          <li>Complete first release of ecosystem</li>
        </ul>
      </div>
      <div className={`${s.phase4} aos-none-mobile `} data-aos="slide-left">
        <p>PHASE 4</p>
        <ul>
          <li>App Release</li>
          <li>Onboard {`KOL's`} for marketing push</li>
          <li>Major Marketing and User Acquisition Campaigns begin</li>
          <li>Tune App in-App functions</li>
          <li>DEX & CEX</li>
        </ul>
      </div>
      <div className={`${s.further} aos-none-mobile `} data-aos="slide-right">
        <p>FURTHER</p>
        <ul>
          <li>Automotive industry partnerships</li>
          <li>Limited edition NFTs.</li>
          <li>Pop-up advertising billboards.</li>
          <li>NFT Evolution and Customisation.</li>
          <li>Drivepass</li>
          <li>NFT Renting</li>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
