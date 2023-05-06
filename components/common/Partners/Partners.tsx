import FC from "react";
import s from "./Partners.module.scss";
import Image from "next/image";

const Partners = () => {
  return (
    <div className={`${s.container}`}>
      <div className={s.heading}>
        <h1>Our Partners</h1>
      </div>
      <div className={s.partnerImage}>
        <div className={s.polygon}>
          <Image src="/images/polygon.png" alt="polygon" layout="fill" />
        </div>
        <div className={s.binance}>
          <Image src="/images/binance.png" alt="polygon" layout="fill" />
        </div>
        <div className={s.sequoia}>
          <Image src="/images/sequoia.png" alt="polygon" layout="fill" />
        </div>
        <div className={s.cnbc}>
          <Image src="/images/cnbc.png" alt="polygon" layout="fill" />
        </div>
        <div className={s.solana}>
          <Image src="/images/solana.png" alt="polygon" layout="fill" />
        </div>
        <div className={s.reddit}>
          <Image src="/images/reddit.png" alt="polygon" layout="fill" />
        </div>
      </div>
      <div className={s.partnerMobile}>
        <Image
          src="/images/mobilepartners.svg"
          alt="polygon"
          width={360}
          height={250}
        />
      </div>
    </div>
  );
};

export default Partners;
