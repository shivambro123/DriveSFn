import gsap from "gsap";
import { FC, useEffect, useRef } from "react";
import s from "./Statistics.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CarRotate: FC = () => {
  const commonRef: any = useRef({});
  commonRef.current = {};

  useEffect(() => {
    const canvas: any = document.getElementById("car-360-image");
    const context = canvas.getContext("2d");

    canvas.width = 900;
    canvas.height = 506;

    const frameCount = 52;
    const currentFrame = (index: number) =>
      `/images/car-model-1/${index + 1}.png`;

    const images: any = [];
    const airpods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        start: "top center",
        scrub: 0.5,
        trigger: commonRef.current["listItem"],
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }
  }, []);
  return (
    <div
      className={s.carAnim}
      ref={(el) => (commonRef.current["listItem"] = el)}
    >
      <canvas id="car-360-image" />
    </div>
  );
};

export default CarRotate;
