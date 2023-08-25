import { useMemo, useEffect, useRef, useState, Suspense } from "react";
import { getPosts } from "../lib/posts";

import Slider from "react-slick";
import Desktop from "@/components/desktop/Desktop";

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

  const [width, setWidth] = useState();

  const isMobileView = useMemo(() => {
    if (width < 1200) {
      return true;
    }
    return false;
  }, [width]);

  useEffect(() => {
    window && setWidth(window.innerWidth);

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
      {isMobileView ? (
        <h1>모바일용 화면 준비 중</h1>
      ) : (
        <Desktop posts={props.posts} />
      )}
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
