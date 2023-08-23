import { root } from "@/styles/root.css";
import {
  blogSection,
  blog_contents_container,
  blog_section_title,
} from "@/styles/style.css";
import { Button as MuiButton, styled } from "@mui/material";

const StyledButton = styled(MuiButton)(() => ({
  background: root.color.POINT_01,
  color: root.color.WHITE,
  height: 48,
  width: 220,
  borderRadius: 100,
  fontWeight: 700,
  fontSize: 16,
  transition: "all 0.5s",
  "&:hover": {
    background: root.color.POINT_04,
  },
  "&:active": {
    background: root.color.POINT_04,
  },
}));

const Blogs = ({ blogPosts }) => {
  console.log(blogPosts);

  const featuredPost = blogPosts.find((post) => !!post.featured);
  const posts = blogPosts.filter((post) => !post.featured);

  return (
    <section className={blogSection}>
      <div className={blog_contents_container}>
        <h2 className={blog_section_title}>
          블로그를 통해 더 많은
          <br />
          법률 정보를 확인해보세요??(제목미정)
        </h2>
        <StyledButton>사건 분석 더 보러 가기</StyledButton>
        <h3>{featuredPost.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: featuredPost.html }} />
      </div>
    </section>
  );
};

export default Blogs;
