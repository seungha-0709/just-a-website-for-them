import Image from "next/image";
import { root } from "@/styles/root.css";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Main from "./Main";
import Profile from "./Profile";
import Blogs from "./Blogs";
import Success from "./Success";

import Place from "./Place";
import { addMember } from "../../../lib/admin";
import Nav from "./Nav";

const Mobile = ({ posts, success, featuredPosts, isRender }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div style={{ display: `${isRender ? "block" : "none"}` }}>
      {/* <AppBar
        position="fixed"
        style={{
          height: 60,
          background: root.color.WHITE,
          boxShadow: `0px 0px 20px ${root.color2.COLOR_03}`,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          borderRadius: "0px 0px 20px 20px",
        }}
      > */}
      {/* <Image
          src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/lawfirm_logo.png"
          width={90}
          height={40}
          alt="법무법인 소울"
          priority
        />
        <div /> */}
      {/* </AppBar> */}
      <div style={{ paddingTop: 20 }}>
        <Main />
        <Profile />
        <Blogs blogPosts={posts} featuredPosts={featuredPosts} />
        <Success examples={success} />
        <Place />
      </div>
      {/* <Nav isRender={isRender} /> */}
    </div>
  );
};

export default Mobile;
