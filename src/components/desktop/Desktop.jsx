import { useRef, useEffect } from "react";
import Header from "../Header";
import Main from "../Main";
import Profile from "../Profile";
import Blogs from "../Blogs";
import Success from "../Success";
import Reviews from "../Reviews";
import Slider from "react-slick";
import { contents } from "@/styles/style.css";

const Desktop = ({ posts: blogPosts }) => {
  const mainCarouselRef = useRef(Slider);

  return (
    <div style={{ scrollMargin: 76, scrollBehavior: "smooth" }}>
      <Header />
      <div style={{ width: "100%", height: "fit-content" }}>
        {/* <Slider
              ref={mainCarouselRef}
              {...carouselSettings}
              // style={{ paddingTop: 60 }}
            > */}
        <Main toNext={mainCarouselRef.current.slickNext} />
        <Profile toPreview={mainCarouselRef.current.slickPrev} />
        <Blogs blogPosts={blogPosts} />
        <Success />
        <Reviews />
        {/* </Slider> */}
      </div>
      <section className={contents}></section>
    </div>
  );
};

export default Desktop;
