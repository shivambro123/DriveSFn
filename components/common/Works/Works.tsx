import FC from "react";
import s from "./Works.module.scss";
import Image from "next/image";

const Works = () => {
  return (
    <div className={`${s.container} boxed`}>
      <h1 className={s.head}>How it works</h1>
      <div className={s.content}>
        <div
          className={s.lefttext}
          data-aos-duration="1000"
          data-aos="slide-right"
        >
          <div className={s.box}>
            <h1>1. Download DriveSfn</h1>
            {/* <p>
              Aliquet arcu, morbi enim feugiat at gravida in habitant. Lorem
              eget diam pulvinar agna egestas na elit.
            </p> */}
          </div>
          <div className={s.box2}>
            <h1>2. Register your Account</h1>
            {/* <p>
              Elementum fusce quis non nunc leo, eu. Neque, dui, a tempor
              sodales faucibus in suspendisse.{" "}
            </p> */}
          </div>
        </div>
        <div
          className={`${s.mobWrap} aos-none-mobile`}
          data-aos-duration="1000"
          data-aos="slide-up"
        >
          <Image src="/images/Mobileface.png" alt="mobile" layout="fill" />
        </div>
        <div
          className={s.lefttext}
          data-aos-duration="1000"
          data-aos="slide-left"
        >
          <div className={s.box}>
            <h1>3. Create wallet then Buy an NFT</h1>
            {/* <p>
              Aliquet arcu, morbi enim feugiat at gravida in habitant. Lorem
              eget diam pulvinar agna egestas na elit.
            </p> */}
          </div>
          <div className={s.box2}>
            <h1>4. Start to earn whilst driving</h1>
            {/* <p>
              Elementum fusce quis non nunc leo, eu. Neque, dui, a tempor
              sodales faucibus in suspendisse.{" "}
            </p> */}
          </div>
        </div>
      </div>
      <div className={s.rect} data-aos-duration="1000" data-aos="slide-up">
        <Image src="/images/orangeRectangle.svg" alt="mobile" layout="fill" />
      </div>
      <div className={s.tyre} data-aos-duration="1000" data-aos="slide-left">
        <Image src="/images/tyre2.png" alt="mobile" layout="fill" />
      </div>
    </div>
  );
};

export default Works;
