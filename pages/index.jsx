"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { getPosts } from "../lib/posts";

import Slider from "react-slick";
// import Desktop from "@/components/desktop/Desktop";
import { root } from "@/styles/root.css";
// import Mobile from "@/components/mobile/Mobile";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { LinearProgress, styled } from "@mui/material";

const Mobile = dynamic(() => import("@/components/mobile/Mobile"), {
  loading: () => <p>loading...</p>,
});
const Desktop = dynamic(() => import("@/components/desktop/Desktop"), {
  loading: () => <p>loading...</p>,
});

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`& .MuiLinearProgress-root`]: {
    backgroundColor: root.color.WHITE,
  },
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    backgroundColor: root.color.COLOR_05,
  },
}));

const MainPage = (props) => {
  const { posts: blogPosts, success, featuredPosts } = props;
  const bodyRef = useRef(null);

  const [isDOMRendered, setIsDOMRendered] = useState();

  const [isDesktopView, setIsDesktopView] = useState();
  const [mapMounted, setMapMounted] = useState();

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 1200) {
      setIsDesktopView(false);
      setMapMounted("mobile");
      return;
    }
    setIsDesktopView(true);
  }, []);

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
              url: "https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/mobile/mobile_main_bg.png",
              width: 400,
              height: 280,
              alt: "공지연, 정진권 변호사 - 법무법인 소울",
              type: "image/png",
            },
          ],
        }}
      />
      <div
        ref={bodyRef}
        style={{
          background: root.color.WHITE,
          width: "100%",
          minHeight: "100svh",
        }}
      >
        <Suspense fallback={<p>loading</p>}>
          <Desktop
            isRender={isDesktopView}
            posts={blogPosts}
            success={success}
            featuredPosts={featuredPosts}
          />

          <Mobile
            isRender={!isDesktopView}
            posts={blogPosts}
            success={success}
            featuredPosts={featuredPosts}
          />
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
