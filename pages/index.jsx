import { useMemo, useEffect, useRef, useState } from "react";
import { getPosts } from "../lib/posts";
import { contents } from "@/styles/style.css";
import Main from "@/components/Main";
import Profile from "@/components/Profile";
import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Slider from "react-slick";

const MainPage = (props) => {
  const { posts: blogPosts } = props;
  const carouselSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: false,
    slide: "div",
    // className: "main-carousel",
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    draggable: true,
  };

  const bodyRef = useRef(null);
  const mainCarouselRef = useRef(Slider);
  console.log(mainCarouselRef);

  const [width, setWidth] = useState(false);

  const isMobileView = useMemo(() => {
    if (width < 1200) {
      return true;
    }
    return false;
  }, [width]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });

    resizeObserver.observe(bodyRef.current);
  }, []);

  if (!mainCarouselRef.current) {
    return <></>;
  }

  return (
    <div ref={bodyRef}>
      {!isMobileView && (
        <>
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
            {/* </Slider> */}
          </div>
          <section className={contents}></section>
        </>
      )}
      {isMobileView && <h1>모바일용 화면 준비 중</h1>}
    </div>
  );
};

export default MainPage;

export const getStaticProps = async (context) => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};
