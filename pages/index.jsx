import { useMemo, useEffect, useRef, useState, Suspense } from "react";
import { getPosts } from "../lib/posts";

import Slider from "react-slick";
import Desktop from "@/components/desktop/Desktop";
import { root } from "@/styles/root.css";
import Mobile from "@/components/mobile/Mobile";

const MainPage = (props) => {
  const { posts: blogPosts, success, featuredPosts } = props;
  const carouselSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: false,
    slide: "div",
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
    <div ref={bodyRef} style={{ background: root.color.COLOR_01 }}>
      {isMobileView ? (
        <Mobile
          posts={blogPosts}
          success={success}
          featuredPosts={featuredPosts}
        />
      ) : (
        <Desktop
          posts={blogPosts}
          success={success}
          featuredPosts={featuredPosts}
        />
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
    props: {
      featuredPosts: posts.filter((post) =>
        post.tags.map((v) => v.name).includes("main_featured")
      ),
      posts: posts.filter((post) =>
        post.tags.map((v) => v.name).includes("blog-list")
      ),
      success: posts.filter((post) =>
        post.tags.map((v) => v.name).includes("success")
      ),
    },
  };
};
