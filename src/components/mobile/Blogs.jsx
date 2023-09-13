import { root } from "@/styles/root.css";
import {
  blogSection,
  blog_backgroundStyle,
  blog_contents_container,
  blog_featured_content,
  blog_featured_content_html,
  blog_featured_title,
  blog_list_brief_content,
  blog_list_container,
  blog_list_li,
  blog_list_title,
  blog_list_ul,
  blog_section_title,
} from "@/styles/mobileStyle.css";
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
  height: 40,
  width: "fit-content",
  borderRadius: 20,
  fontWeight: 600,
  fontSize: 14,
  display: "block",
  transition: "all 0.5s",
  margin: "12px 0",
  padding: "0px 16px",
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
        src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/mobile/mobile_blog_bg.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        width={400}
        height={200}
        quality={100}
        loading="lazy"
        className={blog_backgroundStyle}
      />
      <div className={blog_contents_container}>
        <h2 className={blog_section_title}>
          블로그를 통해 <br />더 많은 법률 정보를
          <br />
          확인해보세요
        </h2>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          <StyledButton
            onClick={() => window.open("https://m.blog.naver.com/lawyer-kong")}
          >
            공지연 변호사 블로그
          </StyledButton>
          <StyledButton
            onClick={() => window.open("https://m.blog.naver.com/attorney_j2k")}
          >
            정진권 변호사 블로그
          </StyledButton>
        </div>
        <p className={blog_featured_title}>{featuredPost.title}</p>
        <div className={blog_featured_content}>
          <div
            className={blog_featured_content_html}
            dangerouslySetInnerHTML={{ __html: featuredPost.html }}
          />
        </div>
      </div>
      <div className={blog_list_container} style={{ height: 100 }}>
        <ul className={blog_list_ul}>
          <Slider {...sliderSettings}>
            {posts.map((post, index) => {
              const regex = /<[^>]*>|<\/[^>]*>|&[^;]*;/g;
              const contentText = post.html.replace(regex, "");
              return (
                <li key={index}>
                  <h4 className={blog_list_title}>{post.title}</h4>
                  <div id="blog_list_brief" className={blog_list_brief_content}>
                    {contentText}
                  </div>
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
