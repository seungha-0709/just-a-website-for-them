import { useRef, useEffect } from "react";
import Header from "../Header";
import Main from "../Main";
import Profile from "../Profile";
import Blogs from "../Blogs";
import Success from "../Success";
import Reviews from "../Reviews";
import Slider from "react-slick";
import { contents, desktop_container } from "@/styles/style.css";
import Nav from "../Nav";

const Desktop = ({ posts: blogPosts, success, featuredPosts }) => {
  const mainCarouselRef = useRef(Slider);

  return (
    <>
      <Header />
      <Nav />
      <div className={desktop_container}>
        <div>
          {/* <Slider
              ref={mainCarouselRef}
              {...carouselSettings}
              // style={{ paddingTop: 60 }}
            > */}
          <Main toNext={mainCarouselRef.current.slickNext} />
          <Profile toPreview={mainCarouselRef.current.slickPrev} />
          <Blogs blogPosts={blogPosts} featuredPosts={featuredPosts} />
          <Success examples={success} />
          {/* <Reviews /> */}
          {/* </Slider> */}
        </div>
        <section className={contents}></section>
      </div>
    </>
  );
};

export default Desktop;
