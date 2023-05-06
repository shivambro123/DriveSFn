import React from "react";
import s from "./Body.module.scss";
import Image from "next/image";

const Body = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.text}`}>
        <p className={`${s.statstext}`}>STATISTICS</p>
      </div>
      <div className={`${s.carbg}`}>
        <Image src="/images/carbg.png" alt="carbg" layout="fill" />
      </div>

      <div className={`${s.statscard1}`}>
        <div className={`${s.stats1}`}>
          <Image src="/images/stats1.svg" alt="stats1" layout="fill" />
        </div>
        {/* <div className={`${s.hexbg}`}>
                <Image 
                src="/images/hexbg.png"
                alt="hexbg"
                layout='fill'
                />
        </div>  
        <div className={`${s.circle}`}>
        <div className={`${s.outercircle}`}>
                <Image 
                src="/images/outercircle.png"
                alt="outercircle"
                layout='fill'
                />    
        </div>  
        <div className={`${s.innercircle}`}>
                <Image 
                src="/images/innercircle.png"
                alt="innercircle"
                layout='fill'
                />
        </div>  
        </div> */}
      </div>

      <div className={`${s.statscard2}`}>
        <div className={`${s.stats2}`}>
          <Image src="/images/stats2.svg" alt="stats" layout="fill" />
        </div>
        {/* <div className={`${s.hexbg}`}>
                <Image 
                src="/images/hexbg.png"
                alt="hexbg"
                layout='fill'
                />
        </div>  
        <div className={`${s.circle}`}>
        <div className={`${s.outercircle}`}>
                <Image 
                src="/images/outercircle.png"
                alt="outercircle"
                layout='fill'
                />    
        </div>  
        <div className={`${s.innercircle}`}>
                <Image 
                src="/images/innercircle.png"
                alt="innercircle"
                layout='fill'
                />
        </div>  
        </div> */}
      </div>

      <div className={`${s.statscard3}`}>
        <div className={`${s.stats3}`}>
          <Image src="/images/stats3.svg" alt="stats" layout="fill" />
        </div>
        {/* <div className={`${s.hexbg}`}>
                <Image 
                src="/images/hexbg.png"
                alt="hexbg"
                layout='fill'
                />
        </div>  
        <div className={`${s.circle}`}>
        <div className={`${s.outercircle}`}>
                <Image 
                src="/images/outercircle.png"
                alt="outercircle"
                layout='fill'
                />    
        </div>  
        <div className={`${s.innercircle}`}>
                <Image 
                src="/images/innercircle.png"
                alt="innercircle"
                layout='fill'
                />
        </div>  
        </div> */}
      </div>

      <div className={`${s.statscard4}`}>
        <div className={`${s.stats4}`}>
          <Image src="/images/stats4.svg" alt="stats" layout="fill" />
        </div>
        {/* <div className={`${s.hexbg}`}>
                <Image 
                src="/images/hexbg.png"
                alt="hexbg"
                layout='fill'
                />
        </div>  
        <div className={`${s.circle}`}>
        <div className={`${s.outercircle}`}>
                <Image 
                src="/images/outercircle.png"
                alt="outercircle"
                layout='fill'
                />    
        </div>  
        <div className={`${s.innercircle}`}>
                <Image 
                src="/images/innercircle.png"
                alt="innercircle"
                layout='fill'
                />
        </div>  
        </div> */}
      </div>
    </div>
  );
};

export default Body;
