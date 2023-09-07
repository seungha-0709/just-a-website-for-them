"use client";

import { useRef, useEffect } from "react";
import Header from "../Header";
// import Main from "../Main";
// import Profile from "../Profile";
// import Blogs from "../Blogs";
// import Success from "../Success";
// import Reviews from "../Reviews";
import Slider from "react-slick";
import { contents, desktop_container } from "@/styles/style.css";
import Nav from "../Nav";
import dynamic from "next/dynamic";
import Place from "../Place";

const Main = dynamic(() => import("../Main"), {
  loading: () => <p>Loading...</p>,
});
const Profile = dynamic(() => import("../Profile"), {
  loading: () => <p>Loading...</p>,
});
const Blogs = dynamic(() => import("../Blogs"), {
  loading: () => <p>Loading...</p>,
});
const Success = dynamic(() => import("../Success"), {
  loading: () => <p>Loading...</p>,
});
// const Profile = dynamic(() => import("../Profile"));

const Desktop = ({ posts, success, featuredPosts, isRender }) => {
  const mainCarouselRef = useRef(Slider);

  return (
    <div style={{ display: `${isRender ? "block" : "none"}` }}>
      <Header />
      <Nav />
      <div className={desktop_container}>
        <div>
          <Main toNext={mainCarouselRef.current.slickNext} />
          <Profile toPreview={mainCarouselRef.current.slickPrev} />
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
