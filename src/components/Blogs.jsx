import { root } from "@/styles/root.css";
import {
  blogSection,
  blog_backgroundStyle,
  blog_contents_container,
  blog_featured_content,
  blog_featured_title,
  blog_list_brief_content,
  blog_list_container,
  blog_list_li,
  blog_list_title,
  blog_list_ul,
  blog_section_title,
} from "@/styles/style.css";
import {
  Button as MuiButton,
  getCardActionAreaUtilityClass,
  styled,
} from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";

const StyledButton = styled(MuiButton)(() => ({
  background: root.color.POINT_02,
  color: root.color.WHITE,
  height: 48,
  width: 220,
  borderRadius: 100,
  fontWeight: 600,
  fontSize: 16,
  transition: "all 0.5s",
  margin: "40px 0",
  "&:hover": {
    background: root.color.COLOR_01,
  },
  "&:active": {
    background: root.color.COLOR_01,
  },
}));

const Blogs = ({ blogPosts: posts, featuredPosts }) => {
  const sliderSettings = {
    autoplay: true,
    vertical: true,
    slidesToScroll: 2,
    slidesToShow: 2,
    arrows: false,
    infinite: true,
    dots: false,
  };

  const featuredPost = featuredPosts[0];

  return (
    <section id="blogs" className={blogSection}>
      <Image
        src="/image/blog_bg.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        width={1000}
        height={600}
        quality={100}
        className={blog_backgroundStyle}
      />
      <div className={blog_contents_container}>
        <h2 className={blog_section_title}>
          블로그를 통해 더 많은
          <br />
          법률 정보를 확인해보세요
        </h2>
        <StyledButton>사건 분석 더 보러 가기</StyledButton>
        <h3 className={blog_featured_title}>{featuredPost.title}</h3>
        <div
          className={blog_featured_content}
          dangerouslySetInnerHTML={{ __html: featuredPost.html }}
        />
      </div>
      <div className={blog_list_container}>
        <ul className={blog_list_ul}>
          <Slider {...sliderSettings}>
            {posts.map((post, index) => {
              return (
                <li key={index}>
                  <h4 className={blog_list_title}>{post.title}</h4>
                  <div
                    className={blog_list_brief_content}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                </li>
              );
            })}
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
