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
    slidesToScroll: posts.length > 1 ? 2 : 1,
    slidesToShow: posts.length > 1 ? 2 : 1,
    arrows: false,
    infinite: true,
    dots: false,
  };

  const featuredPost = featuredPosts[0];

  return (
    <section id="blogs" className={blogSection}>
      <Image
        src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/blog_bg.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        width={1000}
        height={600}
        quality={100}
        style={{
          zIndex: 0,
          right: -52,
        }}
        className={blog_backgroundStyle}
      />
      <div
        style={{
          width: 1200,
          height: "100%",
          margin: "0 auto",
          // borderLeft: `60px solid ${root.color.COLOR_08}`,
          padding: "100px 0",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div className={blog_contents_container}>
          <h2 className={blog_section_title}>
            블로그를 통해 더 많은
            <br />
            법률 정보를 확인해보세요
          </h2>
          <StyledButton
            style={{ marginRight: 12 }}
            onClick={() => window.open("https://m.blog.naver.com/lawyer-kong")}
          >
            공지연 변호사 블로그
          </StyledButton>
          <StyledButton
            onClick={() => window.open("https://blog.naver.com/attorney_j2k")}
          >
            정진권 변호사 블로그
          </StyledButton>
          <p className={blog_featured_title}>{featuredPost.title}</p>
          <div
            className={blog_featured_content}
            dangerouslySetInnerHTML={{ __html: featuredPost.html }}
          />
        </div>
        <div className={blog_list_container}>
          <ul className={blog_list_ul}>
            <Slider {...sliderSettings}>
              {posts.map((post, index) => {
                const regex = /<[^>]*>|<\/[^>]*>|&[^;]*;/g;
                const contentText = post.html.replace(regex, "");
                console.log(posts);
                return (
                  <li key={index}>
                    <h4 className={blog_list_title}>{post.title}</h4>
                    <div
                      id="blog_list_brief"
                      className={blog_list_brief_content}
                    >
                      {contentText}
                    </div>
                  </li>
                );
              })}
            </Slider>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
