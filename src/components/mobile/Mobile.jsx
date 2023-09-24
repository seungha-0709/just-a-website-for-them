import Image from "next/image";
import { root } from "@/styles/root.css";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Main from "./Main";
import Profile from "./Profile";
import Blogs from "./Blogs";
import Success from "./Success";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Place from "./Place";
import { SwipeableDrawer as MuiSwipeableDrawer, styled } from "@mui/material";
import { addMember } from "../../../lib/admin";
import Nav from "./Nav";
import { hamburger_li } from "@/styles/mobileStyle.css";
import { useRouter } from "next/router";

const SwipeableDrawer = styled(MuiSwipeableDrawer)(() => ({
  "& .MuiPaper-root": {
    width: 200,
    padding: 20,
  },
}));

const Mobile = ({ posts, success, featuredPosts, mapMounted, isRender }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleLiMenuClick = (href) => () => {
    console.log(href);
    router.push(href);
    setOpen(false);
  };

  return (
    <div style={{ display: `${isRender ? "block" : "none"}` }}>
      <header
        style={{
          height: 56,
          width: "100%",
          position: "fixed",
          top: 0,
          zIndex: 50,
          background: root.color.WHITE,
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          borderBottom: `1px solid #e1e1e1`,
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            border: "none",
            background: root.color.WHITE,
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </button>
      </header>
      <div style={{ position: "relative", top: 40 }}>
        <Main isRender={isRender} />
        <Profile />
        <Success examples={success} />
        <Blogs blogPosts={posts} featuredPosts={featuredPosts} />
        <Place />
      </div>
      {open && (
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          swipeAreaWidth={56}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
            }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon style={{ color: root.color2.COLOR_04 }} />
            <ul
              style={{
                listStyle: "none",
                margin: "60px 0 20px",
                padding: 0,
                textAlign: "right",
              }}
            >
              <li
                onClick={handleLiMenuClick("/#profile_mobile")}
                className={hamburger_li}
              >
                변호사 소개
              </li>
              <li
                onClick={handleLiMenuClick("/#success_mobile")}
                className={hamburger_li}
              >
                성공 사례
              </li>
              <li
                onClick={handleLiMenuClick("/#blogs_mobile")}
                className={hamburger_li}
              >
                블로그 소개
              </li>
              <li
                onClick={handleLiMenuClick("/#place_mobile")}
                className={hamburger_li}
              >
                오시는 길
              </li>
            </ul>
          </div>
        </SwipeableDrawer>
      )}
    </div>
  );
};

export default Mobile;
