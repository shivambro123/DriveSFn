import s from "./Navbar.module.scss";
import Image from "next/image";
import { Drawer, Button, DrawerProps, message } from "antd";
import FC, { useState } from "react";
import Link from "next/link";
import { notification } from "antd";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
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
    <div
      className={`${s.container}`}
      data-aos-duration="1000"
      data-aos="slide-down"
    >
      <div className={s.logowrap}>
        <Image src="/images/logo.png" alt="loGo" layout="fill" />
      </div>
      <div className={s.hamBurgerMenu} onClick={showDrawer}>
        <span className={s.bar}></span>
        <span className={s.bar}></span>
        <span className={s.bar}></span>
      </div>
      <Drawer
        placement={placement}
        onClose={onClose}
        visible={visible}
        width={""}
        className="menudrawer"
      >
        {/* <div className={`${s.logo}`}>
          <Link href={"/"}>
            <a>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={94.95}
                height={27.76}
              />
            </a>
          </Link>
        </div> */}
        <p className="menuItems">
          <Link href={""}>
            <a
              onClick={(e) => {
                onMenuItemClick(e, "#home");
                onClose();
              }}
            >
              <p>Home</p>
            </a>
          </Link>
          <Link href="#">
            <a
              onClick={(e) => {
                onMenuItemClick(e, "#aboutus");
                onClose();
              }}
            >
              <p>About us</p>
            </a>
          </Link>
          <Link href="#">
            <a
              onClick={(e) => {
                onMenuItemClick(e, "#why-drivesfn");
                onClose();
              }}
            >
              <p>Why DriveSfn</p>
            </a>
          </Link>
          <Link href="#">
            <a
              onClick={(e) => {
                onMenuItemClick(e, "#roadmap");
                onClose();
              }}
            >
              <p>Roadmap</p>
            </a>
          </Link>
          <Link href="#">
            <a
              onClick={(e) => {
                onMenuItemClick(e, "#community");
                onClose();
              }}
            >
              <p>Community</p>
            </a>
          </Link>
        </p>
      </Drawer>
      <div className={s.navItems}>
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
      <div className={s.startBtn}>
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default Navbar;
