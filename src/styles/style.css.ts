import { style } from "@vanilla-extract/css";
import { root } from "./root.css";

export const header = style({
  width: "100svw",
  height: 76,
  position: "fixed",
  top: 0,
  zIndex: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: root.color.COLOR_02,
  borderBottom: `1px solid ${root.color.COLOR_05}`,
});

export const mainBackgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "80% 0",
});

export const mainSection = style({
  width: "100%",
  height: "100svh",
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const contents = style({
  width: "100svw",
  overflowX: "hidden",
  height: "fit-content",
  background: root.color.WHITE,
});

export const profile_kong_backgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "0% 65%",
  zIndex: 0,
});

export const profileSection = style({
  width: "100%",
  height: "100svh",
  position: "relative",
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
  position: "relative",
  display: "flex",
  flexDirection: "row-reverse",
  borderTop: `1px solid ${root.color.COLOR_07}`,
  borderBottom: `1px solid ${root.color.COLOR_07}`,
});

export const profile_jeong_backgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "100% 25%",
  zIndex: 0,
  left: 100,
});

export const profile_jeong = style({
  width: "100%",
  height: "50vh",
  position: "relative",
  zIndex: 3,
  borderBottom: `1px solid ${root.color.COLOR_07}`,
});

export const blog_backgroundStyle = style({
  objectFit: "contain",
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 0,
});

export const blogSection = style({
  width: "100%",
  height: "100svh",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
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
  position: "relative",
  zIndex: 3,
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
  position: "relative",
  zIndex: 3,
});

export const profile_title_text = style({
  fontSize: 20,
  fontWeight: 400,
  marginTop: 0,
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
  fontSize: 14,
  height: 600,
  width: "100%",
});

export const li_span = style({
  fontWeight: 200,
  color: root.color.COLOR_06,
  display: "block",
  width: "fit-content",
  marginBottom: 2,
});
export const li_strong = style({
  fontWeight: 200,
  marginBottom: 16,
  display: "block",
});

export const main_title_area = style({
  position: "relative",
  left: 60,
  zIndex: 3,
});

export const main_title_text = style({
  fontSize: 44,
  color: root.color.COLOR_07,
  fontWeight: 600,
  margin: 0,
});

export const main_content_text = style({
  fontSize: 16,
  color: root.color.COLOR_09,
  fontWeight: 200,
  margin: "20px 0",
  width: 700,
  height: "auto",
  letterSpacing: 1,
  lineHeight: 1.6,
});

export const blog_contents_container = style({
  paddingLeft: 100,
  paddingTop: 0,
  position: "relative",
  zIndex: 3,
});

export const blog_section_title = style({
  fontSize: 36,
  fontWeight: 700,
  margin: 0,
  color: root.color.COLOR_03,
});

export const blog_featured_title = style({
  fontWeight: 600,
  fontSize: 20,
  color: root.color.COLOR_02,
});

export const blog_featured_content = style({
  width: 600,
  height: 200,
  overflow: "hidden",
  fontWeight: 200,
  lineHeight: 1.6,
  textOverflow: "ellipsis",
  position: "relative",
  "::after": {
    width: 600,
    height: 120,
    content: "",
    position: "absolute",
    bottom: 0,
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
  },
});

export const blog_list_ul = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const blog_list_title = style({
  margin: "0 0 8px 0",
  paddingLeft: 8,
  paddingTop: 16,
});

export const blog_list_container = style({
  width: "80%",
  height: 200,
  marginTop: 56,
  marginLeft: 100,
  overflow: "hidden",
});

export const blog_list_brief_content = style({
  textOverflow: "ellipsis",
  lineClamp: 2,
  height: 48,
  padding: 8,
  borderBottom: `1px solid ${root.color.COLOR_03}`,
  overflow: "hidden",
});

export const success_backgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});
export const success_section = style({
  width: "100%",
  height: "100svh",
  position: "relative",
});

export const reviews_backgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});
export const reviews_section = style({
  width: "100%",
  height: "100svh",
  position: "relative",
});

export const header_ul = style({
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0,
  padding: 0,
  width: 600,
  color: root.color.COLOR_09,
  fontWeight: 400,
  fontSize: 18,
  letterSpacing: 1.2,
});

export const header_nav = style({
  width: 1200,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
