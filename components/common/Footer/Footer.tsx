import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Copyright from "../Copyright";
import s from "./Footer.module.scss";
import { notification } from "antd";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Footer: FC = () => {
  const openNotification = () => {
    notification.open({
      message: "Coming Soon",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const onMenuItemClick = (e: any, to: string) => {
    e.preventDefault();
    e.stopPropagation();
    gsap.to(window, { scrollTo: { y: to, offsetY: 20 } });
  };

  return (
    <>
      <div
        className={`${s.container} boxed`}
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <div className={s.leftWrap}>
          <div className={s.logowrap}>
            <Image src="/images/logo.png" alt="logo" layout="fill" />
          </div>
          <p>
            Want to keep in touch and get the latest updates, then follow us on
            our Social Channels
          </p>
          <div className={s.socials}>
            <Link href="https://discord.com/invite/rpyX92FGJF">
              <a target="_blank">
                <div className={s.link}>
                  <Image
                    src="/images/discord.svg"
                    alt="logo"
                    width={20}
                    height={30}
                  />
                </div>
              </a>
            </Link>

            <Link href="https://twitter.com/drivesfn">
              <a target="_blank">
                <div className={s.link}>
                  <Image
                    src="/images/twitter.svg"
                    alt="logo"
                    width={20}
                    height={30}
                  />
                </div>
              </a>
            </Link>

            <Link href="https://t.me/DriveSfnAnnouncement">
              <a target="_blank">
                <div className={s.link}>
                  <Image
                    src="/images/telegram.svg"
                    alt="logo"
                    width={20}
                    height={30}
                  />
                </div>
              </a>
            </Link>
            <Link href="https://instagram.com/drivesfnofficial?igshid=YmMyMTA2M2Y=">
              <a target="_blank">
                <div className={s.link}>
                  <Image
                    src="/images/insta.svg"
                    alt="logo"
                    width={20}
                    height={30}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className={s.rightWrap}>
          <div className={s.footerlinks}>
            <h1>QUICK LINKS</h1>
            <ul>
              <Link href={""}>
                <a onClick={(e) => onMenuItemClick(e, "#home")}>
                  <li>Home</li>
                </a>
              </Link>
              <Link href="#">
                <a onClick={(e) => onMenuItemClick(e, "#aboutus")}>
                  <li>About us</li>
                </a>
              </Link>
              <Link href="#">
                <a onClick={(e) => onMenuItemClick(e, "#why-drivesfn")}>
                  <li>Why DriveSfn</li>
                </a>
              </Link>
              <Link href="#">
                <a onClick={(e) => onMenuItemClick(e, "#roadmap")}>
                  <li>Roadmap</li>
                </a>
              </Link>
              <Link href="#">
                <a onClick={(e) => onMenuItemClick(e, "#community")}>
                  <li>Community</li>
                </a>
              </Link>
              <Link href="https://drivesfn-official.gitbook.io/drive-safe-whitepaper">
                <a target={"_blank"}>
                  <li>Whitepaper</li>
                </a>
              </Link>

              <a onClick={openNotification}>
                <li>Marketplace</li>
              </a>
            </ul>
          </div>
          <div className={s.legal}>
            <h1>LEGAL</h1>
            <ul>
              <Link href="/privacy-policy">
                <a target="_blank">
                  <li>Privacy Policy</li>
                </a>
              </Link>
              <Link href="/terms-and-conditions">
                <a target="_blank">
                  <li>Terms & Conditions</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
