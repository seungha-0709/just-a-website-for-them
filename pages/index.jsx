"use client";

import { useMemo, useEffect, useRef, useState, Suspense } from "react";
import { getPosts } from "../lib/posts";

import Slider from "react-slick";
// import Desktop from "@/components/desktop/Desktop";
import { root } from "@/styles/root.css";
// import Mobile from "@/components/mobile/Mobile";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Mobile = dynamic(() => import("@/components/mobile/Mobile"), {
  loading: () => <p>loading...</p>,
});
const Desktop = dynamic(() => import("@/components/desktop/Desktop"), {
  loading: () => <p>loading...</p>,
});

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

  const [width, setWidth] = useState();

  const [isMobileView, setIsMobileView] = useState();
  // const isMobileView = useMemo(() => {
  //   if (width < 1200) {
  //     return true;
  //   }
  //   return false;
  // }, [width]);

  useEffect(() => {
    window && setWidth(window.innerWidth);

    const resizeObserver = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });

    resizeObserver.observe(bodyRef.current);
  }, []);

  useEffect(() => {
    if (width < 1200) {
      setIsMobileView(true);
      return;
    }
    setIsMobileView(false);
  }, [width]);

  if (!width) {
    return <div ref={bodyRef}></div>;
  }

  return (
    <>
      <NextSeo
        title={"공지연, 정진권 변호사 - 법무법인 소울"}
        description="당신의 정의, 당신만을 위한 공정, 최적의 방법으로 당신만을 위해 싸우겠습니다."
        openGraph={{
          title: "공지연, 정진권 변호사 - 법무법인 소울",
          description:
            "당신의 정의, 당신만을 위한 공정, 최적의 방법으로 당신만을 위해 싸우겠습니다.",
          images: [
            {
              url: "/image/main_bg.png",
              width: 400,
              height: 280,
              alt: "공지연, 정진권 변호사 - 법무법인 소울",
              type: "image/png",
            },
          ],
        }}
      />
      <div ref={bodyRef} style={{ background: root.color.COLOR_01 }}>
        <Suspense fallback={<p>loading</p>}>
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
        </Suspense>
      </div>
    </>
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
