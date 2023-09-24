import Image from "next/image";
import { root } from "@/styles/root.css";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Main from "./Main";
import Profile from "./Profile";
import Blogs from "./Blogs";
import Success from "./Success";
import MenuIcon from "@mui/icons-material/Menu";
import Place from "./Place";
import { addMember } from "../../../lib/admin";
import Nav from "./Nav";

const Mobile = ({ posts, success, featuredPosts, mapMounted, isRender }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div style={{ display: `${isRender ? "block" : "none"}` }}>
      <header style={{ height: 56, width: "100%", position: "fixed", top: 0 }}>
        <MenuIcon />
      </header>
      <div style={{ paddingTop: 20 }}>
        <Main isRender={isRender} />
        <Profile />
        <Success examples={success} />
        <Blogs blogPosts={posts} featuredPosts={featuredPosts} />
        <Place />
      </div>
      {/* <Nav isRender={isRender} /> */}
    </div>
  );
};

export default Mobile;
