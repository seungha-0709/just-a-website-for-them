import { useRef } from "react";
import { getPosts } from "../lib/posts";
import { contents } from "@/styles/style.css";
import Main from "@/components/Main";
import Profile from "@/components/Profile";
import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Slider from "react-slick";

const MainPage = (props) => {
  const carouselSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    infinite: true,
    arrows: false,
    slide: "section",
    className: "main-carousel",
    // vertical: true,
    draggable: false,
  };

  const mainCarouselRef = useRef(Slider);
  console.log(mainCarouselRef);

  return (
    <>
      <Header />
      <Slider
        ref={mainCarouselRef}
        {...carouselSettings}
        style={{ paddingTop: 60 }}
      >
        <Main toNext={mainCarouselRef.current.slickNext} />
        <Profile toPreview={mainCarouselRef.current.slickPrev} />
      </Slider>
      <section className={contents}>
        <Blogs />
      </section>
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
    props: { posts },
  };
};
