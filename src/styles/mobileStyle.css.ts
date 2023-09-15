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
  height: 500,
  objectFit: "cover",
  // objectPosition: "100px 0",
  position: "absolute",
  zIndex: 10,
  right: -100,
});

export const mainSection = style({
  width: "100%",
  height: 500,
  // position: "absolute",
  position: "sticky",
  top: 0,
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
  background: root.color.COLOR_01,
  zIndex: 10,
  borderRadius: "24px 0 0 24px",
  // boxShadow: "0px 0px 10px rgba(198, 185, 153, 0.4)",
  boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.8)",
});

export const profileSection = style({
  width: "100%",
  height: "fit-content",
  // position: "absolute",
  position: "absolute",
  top: 790,
  display: "flex",
  gap: 0,
  // top: -48,
  zIndex: 30,
  borderRadius: "24px 24px 0 0",
  overflow: "hidden",
  flexDirection: "column",
  // background: root.color.COLOR_04,
  letterSpacing: 1.2,
  fontWeight: 200,
  boxSizing: "border-box",
});

export const profile_kong = style({
  padding: "50px 30px 150px 30px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  zIndex: 30,
  background: root.color.COLOR_01,
});

export const profile_jeong_backgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "100% 25%",
  background: root.color.COLOR_01,
  zIndex: 10,
  left: 100,
  borderRadius: "0 24px 24px 0",
  // boxShadow: "0px 0px 10px rgba(198, 185, 153, 0.4)",
  boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.8)",
});

export const profile_jeong = style({
  background: root.color.COLOR_03,
  width: "100%",
  padding: "140px 30px 120px",
  position: "relative",
  top: -180,
  zIndex: 0,
  boxSizing: "border-box",
});

export const blog_backgroundStyle = style({
  objectFit: "cover",
  height: 300,
  objectPosition: "100% 0%",
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 0,
});

export const blogSection = style({
  background: root.color.WHITE,
  width: "100%",
  height: 944,
  display: "flex",
  overflow: "hidden",
  boxSizing: "border-box",
  position: "absolute",
  top: 1890,
  zIndex: 40,
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "24px 24px 0 0",
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
  color: root.color.COLOR_08,
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
  color: root.color.POINT_01,
  display: "block",
  width: "fit-content",
  margin: "12px 0",
});
export const li_strong = style({
  fontWeight: 300,
  marginBottom: 4,
  display: "block",
  letterSpacing: 0,
  color: root.color.COLOR_08,
});

export const main_title_area = style({
  width: "100%",
  position: "absolute",
  zIndex: 3,
  top: 240,
  zIndex: 40,
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
  position: "absolute",
  top: 100,
  zIndex: 3,
  height: 800,
  margin: "0 28px",
});

export const blog_feature_container = style({
  boxShadow: "4px 4px 10px rgba(37, 33, 26, 0.4)",
  borderRadius: 12,
  width: "100%",
  height: 300,
  padding: 24,
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  background: root.color.COLOR_06,
});

export const blog_section_title = style({
  fontSize: 24,
  fontWeight: 600,
  position: "relative",
  left: 6,
  top: 30,
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
  height: 160,
  top: 100,
  width: "80%",
  overflow: "hidden",
  fontSize: 14,
  fontWeight: 200,
  lineHeight: 1.4,
  textOverflow: "ellipsis",
  position: "absolute",
  "::after": {
    width: 600,
    height: 120,
    content: "",
    position: "absolute",
    bottom: 0,
    background:
      "linear-gradient(to bottom, rgba(215, 185, 14, 0), rgba(215, 185, 140, 1))",
  },
});

export const blog_list_ul = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const blog_list_title = style({
  margin: "0 0 8px 0",
  // paddingLeft: 8,
  paddingTop: 14,
  fontWeight: 500,
});

export const blog_list_container = style({
  width: "100%",
  height: 200,
  marginTop: 32,
  overflow: "hidden",
  position: "absolute",
  bottom: 40,
});

export const blog_list_brief_content = style({
  width: "100%",
  textOverflow: "ellipsis",
  lineClamp: 2,
  height: 34,
  // padding: "8px 8px 20px 8px",
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
  borderRadius: "24px 24px 0 0",
});
export const successSection = style({
  width: "100%",
  height: 700,
  padding: "40px 0",
  position: "absolute",
  top: 2830,
  zIndex: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const place_backgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  paddingBottom: 100,

  borderRadius: "24px 24px 0 0",
});
export const place_section = style({
  width: "100%",
  height: 500,
  position: "absolute",
  top: 3550,
  zIndex: 50,
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
  position: "absolute",
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
  marginBottom: 0,
});

export const success_subtitle = style({
  fontSize: 16,
  fontWeight: 400,
  color: root.color.COLOR_06,
  lineHeight: 1.6,
  textAlign: "center",
  marginBottom: 40,
  marginTop: 20,
});

export const success_example_container = style({
  display: "flex",
  width: "fit-content",
  height: 500,
  gap: 20,
  alignItems: "center",
  position: "relative",
  justifyContent: "center",
});

export const success_example_item = style({
  width: 300,
  height: 360,
  borderRadius: 16,
  textAlign: "left",
  padding: 32,
  display: "flex",
  alignItems: "flex-start",
  boxShadow: "8px 8px 10px rgba(7, 3, 0, 0.5)",
  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
  border: "none",
  flexDirection: "column",
  // border: `1px solid ${root.color.COLOR_05}`,

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
  position: "absolute",
  overflow: "hidden",
  margin: "0 auto",
  borderLeft: `1px solid ${root.color.COLOR_05}`,
  borderRight: `1px solid ${root.color.COLOR_05}`,
});

export const main_words_list_container = style({
  width: "100%",
  height: 324,
  // background: "#000",
  zIndex: 10,
  // top: -24,
  display: "flex",
  // margin: "0 auto",
  position: "absolute",
  top: 500,
  flexWrap: "wrap",
  alignContent: "center",
  padding: "20px 24px 52px",
  boxSizing: "border-box",
  justifyContent: "center",
  gap: 12,
  // backgroundSize: "cover",
  // background:
  //   "url(https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/mobile/mobile_bg_2.png)",
});

export const main_words_list_bg = style({
  position: "absolute",
  top: 0,
  objectFit: "cover",
  borderRadius: "24px 24px 0 0",
});

export const main_words_list_item = style({
  width: 96,
  height: 96,
  position: "relative",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  justifyContent: "center",
  alignItems: "center",
  fontSize: 14,
  fontWeight: 400,
  color: root.color.COLOR_09,
  borderRadius: 16,
  background: "rgba(31, 18, 0, 0.8)",
  boxShadow: "4px 4px 10px rgba(37, 33, 26, 0.9)",
});
