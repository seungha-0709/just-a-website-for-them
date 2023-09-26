"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { getPosts } from "../lib/posts";

import Desktop from "@/components/desktop/Desktop";
import { root } from "@/styles/root.css";
import Mobile from "@/components/mobile/Mobile";
import { NextSeo } from "next-seo";

const MainPage = (props) => {
  const { posts: blogPosts, success, featuredPosts } = props;
  const bodyRef = useRef(null);

  const [isDesktopView, setIsDesktopView] = useState();

  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState({
    kakao: 0,
    tel: 0,
    place: 0,
    mail: 0,
  });

  const handleKakaoClick = () => () => {
    setOpen(false);
    setIsClicked({
      ...isClicked,
      kakao: isClicked.kakao + 1,
    });
    window.open("https://pf.kakao.com/_TsAxdG");
  };

  const handleMailClick = () => () => {
    setOpen(false);
    setIsMailOpen(true);
  };

  const handleTelClick = () => () => {
    setOpen(false);
    setIsClicked({
      ...isClicked,
      tel: isClicked.tel + 1,
    });
    window.location.href = "tel:01079340883";
  };

  const handleMailSubmitComplete = () => () => {
    setIsSnackbarOpen(false);
    setIsClicked({
      ...isClicked,
      mail: isClicked.mail + 1,
    });
  };

  useEffect(() => {
    const width = window && window.innerWidth;
    if (width < 1200) {
      setIsDesktopView(false);
      return;
    }
    setIsDesktopView(true);
  }, []);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "mail_submit", //광고주 측에서 설정하고 싶은 값(default convType) : "mail_submit_mobile", //광고주 측에서 설정하고 싶은 값(default convType)
        convType: "etc", //etc, join, login
        click: "#mail_submit", //click으로 전환 잡을 경우 css selector 값
      });
    }
  }, [isClicked.mail, isDesktopView]);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "kakao",
        convType: "etc",
        click: "#kakao",
      });
    }
  }, [isClicked.kakao, isDesktopView]);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "tel",
        convType: "etc",
        click: "#tel",
      });
      console.log("???");
    }
  }, [isClicked.tel, isDesktopView]);

  console.log(isClicked);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "place",
        convType: "etc",
        click: "#place",
      });
    }
  }, [isClicked.place, isDesktopView]);

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
            handleMailClick={handleMailClick()}
            handleTelClick={handleTelClick()}
            handleKakaoClick={handleKakaoClick()}
            handleMailSubmitComplete={handleMailSubmitComplete()}
            isRender={isDesktopView}
            posts={blogPosts}
            success={success}
            featuredPosts={featuredPosts}
          />

          <Mobile
            open={open}
            setOpen={setOpen}
            handleMailClick={handleMailClick()}
            handleTelClick={handleTelClick()}
            handleKakaoClick={handleKakaoClick()}
            handleMailSubmitComplete={handleMailSubmitComplete()}
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
