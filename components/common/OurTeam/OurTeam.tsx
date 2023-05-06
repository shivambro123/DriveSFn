import AppConstant from "constant/AppConstant";
import FC from "react";
import s from "./OurTeam.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useState, useRef, useEffect } from "react";

const OurTeam = () => {
  const [swiper, setSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const bulletList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiper !== null) {
      // swiper.update();
    }
  }, [swiper]);
  const sliderOptions = {
    spaceBetween: 30,
    allowTouchMove: true,
    simulateTouch: true,
    speed: 300,
    watchSlidesProgress: true,
    loop: false,

    onBeforeInit: (swiperItem: any) => {
      setTimeout(() => {
        swiperItem.rebuildOnUpdate = true;
        setSwiper(swiperItem);
      });
    },
    navigation: true,
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
        // centeredSlides: true,
        // initialSlide: 2,
        // loop: true,
      },
      600: {
        slidesPerView: 1.6,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 22,
      },
      990: {
        slidesPerView: 1,
        spaceBetween: 22,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 97,
      },
    },
  };
  return (
    <div className={` ${s.container}`}>
      <div className={s.heading}>
        <h2>Our Team</h2>
      </div>
      <Swiper
        {...sliderOptions}
        // slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        className="teamSlider"
      >
        <div className={s.cardsWrapper}>
          {AppConstant.TeamMembers.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  className={s.cards}
                  key={i}
                  data-aos-duration="1000"
                  data-aos="zoom-in-down"
                >
                  <div className={s.cardContainer}>
                    <div className={s.front}>
                      <div className={s.imgWrapper}>
                        <Image src={item.image} width={332.83} height={371} />
                      </div>
                      <div className={s.content}>
                        <p className={s.name}>{item.name}</p>
                        <span className={s.designation}>
                          {item.designation}
                        </span>
                      </div>
                    </div>
                    <div className={s.back}>
                      <p className={s.name}>{item.name2}</p>
                      <span className={s.title}>{item.designation2}</span>
                      <p className={s.content}>{item.info}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default OurTeam;
