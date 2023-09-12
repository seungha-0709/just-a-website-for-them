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
  // objectPosition: "-100px 0",
  position: "absolute",
  right: -100,
});

export const mainSection = style({
  width: "100%",
  height: 300,
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
  height: 200,
  objectFit: "cover",
  objectPosition: "0% 65%",
  zIndex: 0,
});

export const profileSection = style({
  width: "100%",
  height: "fit-content",
  position: "relative",
  display: "flex",
  gap: 0,
  flexDirection: "column",
  background: root.color.COLOR_04,
  letterSpacing: 1.2,
  fontWeight: 200,
  boxSizing: "border-box",
});

export const profile_kong = style({
  padding: 30,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  background: root.color.WHITE,
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
  background: root.color.WHITE,
  width: "100%",
  padding: 30,
  position: "relative",
  zIndex: 3,
});

export const blog_backgroundStyle = style({
  objectFit: "contain",
  objectPosition: "100% 0%",
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 0,
});

export const blogSection = style({
  background: root.color.WHITE,
  width: "100%",
  height: "fit-contents",
  display: "flex",
  boxSizing: "border-box",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  borderLeft: `10px solid ${root.color.COLOR_06}`,
  padding: "30px 30px 30px 20px",
});

export const titleText = style({
  fontSize: 20,
  fontWeight: 600,
});

export const profile_container = style({
  width: "100%",
  height: "100%",
  display: "flex",
});

export const profile_title_text = style({
  fontSize: 18,
  fontWeight: 400,
  marginTop: 0,
  marginBottom: 36,
  selectors: {
    ["em &"]: {
      fontSize: 24,
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
  fontSize: 14,
  letterSpacing: 0,
  width: "100%",
});

export const li_span = style({
  fontWeight: 400,
  color: root.color.POINT_02,
  display: "block",
  width: "fit-content",
  margin: "12px 0",
});
export const li_strong = style({
  fontWeight: 300,
  marginBottom: 4,
  display: "block",
  letterSpacing: 0,
  color: root.color.COLOR_01,
});

export const main_title_area = style({
  width: "100%",
  position: "absolute",
  zIndex: 3,
  bottom: 60,
});

export const main_title_text = style({
  fontSize: 24,
  color: root.color.COLOR_07,
  fontWeight: 600,
  margin: 0,
  paddingLeft: 20,
});

export const main_content_text = style({
  fontSize: 14,
  background: "rgba(0,0,0,0.6)",
  color: root.color.COLOR_09,
  fontWeight: 300,
  margin: "20px 0 0",
  width: "100%",
  padding: 12,
  height: "auto",
  paddingLeft: 26,
  // letterSpacing: 1,
  // lineHeight: 1.6,
});

export const blog_contents_container = style({
  position: "relative",
  zIndex: 3,
});

export const blog_section_title = style({
  fontSize: 24,
  fontWeight: 600,
  margin: 0,
  color: root.color.COLOR_03,
});

export const blog_featured_title = style({
  fontWeight: 600,
  fontSize: 16,
  color: root.color.COLOR_02,
  marginBottom: 20,
});

export const blog_featured_content = style({
  width: "100%",
  height: 160,
  overflow: "hidden",
  fontSize: 14,
  fontWeight: 200,
  lineHeight: 1.4,
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
  paddingTop: 14,
  fontWeight: 500,
});

export const blog_list_container = style({
  width: "100%",
  height: 200,
  marginTop: 32,
  overflow: "hidden",
});

export const blog_list_brief_content = style({
  width: "100%",
  textOverflow: "ellipsis",
  lineClamp: 2,
  height: 24,
  padding: "8px 8px 20px 8px",
  // borderBottom: `1px solid ${root.color.COLOR_03}`,
  overflow: "hidden",
  fontSize: 14,
  fontWeight: 200,
  background:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
});

export const successBackgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  objectPosition: "50%, 0%",
});
export const successSection = style({
  width: "100%",
  height: 500,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const place_backgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});
export const place_section = style({
  width: "100%",
  height: 500,
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
  letterSpacing: 1.4,
});

export const header_nav = style({
  width: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const globalNav = style({
  position: "fixed",
  top: "50%",
  right: 1,
  zIndex: 10,
  transform: "translate(0%, -50%)",
  width: 100,
  background: root.color.WHITE,
});

export const globalNav_button = style({
  width: 100,
  height: 100,
});

export const main_title_em = style({
  fontSize: 40,
});

export const main_title_name = style({
  fontSize: 24,
});

export const main_title_main_text = style({
  fontSize: 20,
});

export const success_content_area = style({
  width: "100%",
  height: "fit-content",
  position: "relative",
  zIndex: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const success_title = style({
  fontSize: 24,
  fontWeight: 500,
  color: root.color.COLOR_08,
  marginTop: 0,
  marginBottom: 30,
});

export const success_subtitle = style({
  fontSize: 16,
  fontWeight: 400,
  color: root.color.COLOR_06,
  marginTop: 0,
  lineHeight: 1.6,
  textAlign: "center",
  marginBottom: 40,
});

export const success_example_container = style({
  display: "flex",
  width: "fit-content",
  height: 150,
  gap: 20,
  alignItems: "center",
  justifyContent: "center",
});

export const success_example_item = style({
  width: 150,
  height: 150,
  cursor: "pointer",
  position: "relative",
  border: `1px solid ${root.color.COLOR_05}`,
  "::after": {
    content: "",
    position: "absolute",
    zIndex: 5,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
  },
});

export const desktop_container = style({
  width: 1200,
  position: "relative",
  overflow: "hidden",
  margin: "0 auto",
  borderLeft: `1px solid ${root.color.COLOR_05}`,
  borderRight: `1px solid ${root.color.COLOR_05}`,
});

export const main_words_list_container = style({
  width: "100%",
  height: 100,
  display: "flex",
  margin: "0 auto",
  position: "absolute",
  bottom: -58,
  left: "50%",
  transform: "translate(-50%, 0)",
  zIndex: 5,
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  gap: 2,
});

export const main_words_list_item = style({
  width: 80,
  height: 40,
  // borderRadius: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 12,
  fontWeight: 500,
  color: root.color.COLOR_09,
  border: `1px solid ${root.color.POINT_03}`,
  background: root.color.COLOR_01,
  // "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
});
