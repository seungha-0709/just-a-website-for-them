"use client";

import { useRef, useEffect } from "react";
import Header from "./Header";
import Slider from "react-slick";
import { contents, desktop_container } from "@/styles/style.css";
import Nav from "./Nav";
import dynamic from "next/dynamic";
import Place from "./Place";

const Main = dynamic(() => import("./Main"), {
  loading: () => <p>Loading...</p>,
});
const Profile2 = dynamic(() => import("./Profile2"), {
  loading: () => <p>Loading...</p>,
});
const Blogs = dynamic(() => import("./Blogs"), {
  loading: () => <p>Loading...</p>,
});
const Success = dynamic(() => import("./Success"), {
  loading: () => <p>Loading...</p>,
});

const Desktop = ({
  posts,
  success,
  featuredPosts,
  isRender,
  handleTelClick,
  handleKakaoClick,
  handleMailSubmit,
}) => {
  return (
    <div style={{ display: `${isRender ? "block" : "none"}` }}>
      <Header />
      <Nav
        isRender={isRender}
        handleKakaoClick={handleKakaoClick}
        handleMailSubmit={handleMailSubmit}
        handleTelClick={handleTelClick}
      />
      <div className={desktop_container}>
        <div>
          <Main />
          <Profile2 />
          <Blogs blogPosts={posts} featuredPosts={featuredPosts} />
          <Success examples={success} />
          <Place />
        </div>
        <section className={contents}></section>
      </div>
    </div>
  );
};

export default Desktop;
