import FC from "react";
import s from "./Goal.module.scss";
import Image from "next/image";
import AppConstant from "constant/AppConstant";
import { useRef, useState } from "react";

const Goal = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  const sliderOptions = {
    spaceBetween: 30,
    effect: "fade" as const,
    // allowTouchMove: false,
    speed: 300,
    watchSlidesProgress: true,

    // direction: "vertical" as const,
    onBeforeInit: (swiperItem: any) => {
      setTimeout(() => {
        swiperItem.rebuildOnUpdate = true;
        setSwiper(swiperItem);
      });
    },
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    breakpoints: {
      280: {
        slidesPerView: 1.2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 5,
      },
      1100: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className={`${s.container} boxed`} id="why-drivesfn">
      <div className={s.headText}>
        <h1>
          Why <br />
          DriveSfn?
        </h1>
        <p>
          DriveSfn is the World’s first Blockchain Drive-and-earn Navigation
          based App, Where Drivers can earn by driving safely and obeying the
          speed limits.
        </p>
      </div>
      <div className={s.cards}>
        <div className={s.card}>
          <div className={s.imageWrap}>
            <Image
              src="/images/cardaim.svg"
              alt="image"
              width={50}
              height={50}
            />
          </div>
          <h1>Our Goal</h1>
          <p>
            To provide a practical solution to the high number of traffic
            accidents caused by speeding and to reduce fuel emissions, making
            the world a safer and environmentally cleaner place.
          </p>
        </div>
        <div className={s.card}>
          <div className={s.imageWrap}>
            <Image
              src="/images/card1Image.svg"
              alt="image"
              width={50}
              height={50}
            />
          </div>
          <h1>How Will We Achieve this?</h1>
          <p>
            The DriveSfn App will reward drivers for driving within the speed
            limits.
          </p>
        </div>
        <div className={s.card}>
          <div className={s.imageWrap}>
            <Image
              src="/images/card3Image.svg"
              alt="image"
              width={50}
              height={50}
            />
          </div>
          <h1>What Does This Project Mean For You?</h1>
          <p>
            Use our versatile Navigation App to guide you and earn for being
            responsible by following the speed limits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
