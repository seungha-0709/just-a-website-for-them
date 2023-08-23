import { style } from "@vanilla-extract/css";
import { root } from "./root.css";

export const header = style({
  width: "100svw",
  height: 60,
  position: "fixed",
  top: 0,
  zIndex: 10,
  backgroundColor: root.color.COLOR_02,
  borderBottom: `1px solid ${root.color.COLOR_05}`,
});

export const mainSection = style({
  width: "100%",
  minHeight: "100svh",
  background: "url(/image/main_bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "80% 0%",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
});

export const contents = style({
  width: "100svw",
  overflowX: "hidden",
  height: "fit-content",
  background: root.color.WHITE,
});

export const profileSection = style({
  width: "100%",
  height: "100svh",
  display: "flex",
  gap: 0,
  flexDirection: "column",
  background: root.color.COLOR_04,
  letterSpacing: 1.2,
  fontWeight: 200,
});

export const profile_kong = style({
  width: "100%",
  height: "50vh",
  background: "url(/image/profile_kongJiYeon.png)",
  backgroundSize: "cover",
  backgroundPosition: "0% 65%",
  display: "flex",
  flexDirection: "row-reverse",
  border: `1px solid ${root.color.COLOR_07}`,
});

export const profile_jeong = style({
  width: "100%",
  height: "50vh",
  background: "url(/image/profile_JeongJinKwon.png)",
  backgroundSize: "75%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "100% 25%",
  border: `1px solid ${root.color.COLOR_07}`,
});

export const blogSection = style({
  width: "100%",
  height: "100svh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "url(/image/blog_bg.png)",
  backgroundSize: "70%",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "right",
  borderLeft: `60px solid ${root.color.COLOR_06}`,
});

export const titleText = style({
  fontSize: 36,
  fontWeight: 600,
});

export const profile_container = style({
  width: "100%",
  height: "100%",
  display: "flex",
});

export const profile_kong_container = style({
  width: "55%",
  height: "100%",
  background: "rgba(36, 32, 25, 0.9)",
  padding: "40px 60px",
  boxSizing: "border-box",
  color: root.color.COLOR_09,
});

export const profile_jeong_container = style({
  width: "55%",
  height: "100%",
  background: root.color.COLOR_02,
  padding: "40px 60px",
  boxSizing: "border-box",
  color: root.color.COLOR_09,
});

export const profile_title_text = style({
  fontSize: 20,
  fontWeight: 400,
  marginBottom: 36,
  selectors: {
    ["em &"]: {
      fontSize: 28,
      fontWeight: 600,
      fontStyle: "normal",
    },
  },
});

export const flex = style({
  display: "flex",
  gap: 40,
});

export const name = style({
  fontSize: 28,
  fontWeight: 600,
});

export const ul = style({
  listStyle: "none",
  padding: 0,
  boxSizing: "border-box",
  margin: 0,
  fontWeight: 200,
  height: 600,
  width: "100%",
});

export const li_span = style({
  fontWeight: 200,
  color: root.color.COLOR_06,
  display: "block",
  width: "fit-content",
  marginBottom: 4,
});
export const li_strong = style({
  fontWeight: 200,
  marginBottom: 24,
  display: "block",
});

export const main_title_area = style({});

export const main_title_text = style({
  fontSize: 44,
  color: root.color.COLOR_07,
  fontWeight: 600,
  margin: 0,
});

export const main_content_text = style({
  fontSize: 16,
  color: root.color.COLOR_09,
  fontWeight: 300,
  letterSpacing: 1,
});

export const blog_contents_container = style({
  paddingLeft: 100,
  paddingTop: 100,
});

export const blog_section_title = style({
  fontSize: 32,
  fontWeight: 700,
  color: root.color.COLOR_03,
});
