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
  width: 1200,
  height: "100svh",
  position: "relative",
  display: "flex",
  alignItems: "center",
  paddingLeft: 80,
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
  height: "calc(100svh - 76px)",
  position: "relative",
  display: "flex",
  gap: 0,
  flexDirection: "column",
  background: root.color.COLOR_04,
  letterSpacing: 1.2,
  fontWeight: 200,
  boxSizing: "border-box",
  borderTop: `28px solid ${root.color.COLOR_02}`,
  borderBottom: `28px solid ${root.color.COLOR_02}`,
});

export const profile_kong = style({
  width: "100%",
  height: "calc(50vh - 76px)",
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
  height: "calc(50vh - 76px)",
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
  background: root.color.WHITE,
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
  padding: "30px 50px",
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
  marginBottom: 20,
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
  fontSize: 15,
  height: 600,
  width: "100%",
});

export const li_span = style({
  fontWeight: 400,
  color: root.color.COLOR_06,
  display: "block",
  width: "fit-content",
  margin: "12px 0",
});
export const li_strong = style({
  fontWeight: 200,
  marginBottom: 6,
  display: "block",
});

export const main_title_area = style({
  position: "relative",
  left: 60,
  bottom: 56,
  zIndex: 3,
});

export const main_title_text = style({
  fontSize: 44,
  color: root.color.COLOR_07,
  fontWeight: 600,
  margin: 0,
});

export const main_content_text = style({
  fontSize: 28,
  color: root.color.COLOR_09,
  fontWeight: 500,
  margin: "50px 0",
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
  marginBottom: 20,
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

export const successBackgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  objectPosition: "50%, 0%",
});
export const successSection = style({
  width: "100%",
  height: "100svh",
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
export const placeSection = style({
  width: "100%",
  height: "100svh",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  width: 120,
  background: "transparent",
});

export const globalNav_button = style({
  width: 100,
  height: 100,
});

export const main_title_em = style({
  fontSize: 120,
});

export const main_title_name = style({
  fontSize: 24,
});

export const main_title_main_text = style({
  fontSize: 48,
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
  fontSize: 48,
  fontWeight: 700,
  color: root.color.COLOR_08,
  marginTop: 0,
  marginBottom: 60,
});

export const success_subtitle = style({
  fontSize: 28,
  fontWeight: 400,
  color: root.color.COLOR_06,
  marginTop: 0,
  lineHeight: 1.6,
  textAlign: "center",
  marginBottom: 120,
});

export const success_example_container = style({
  display: "flex",
  gap: 20,
  alignItems: "center",
  justifyContent: "space-between",
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

export const send_email_form = style({
  display: "flex",
  flexDirection: "column",
  width: 500,
  gap: 20,
});

export const main_words_list_container = style({
  width: "100%",
  maxWidth: 1000,
  height: 200,
  display: "flex",
  margin: "0 auto",
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translate(-50%, 0)",
  zIndex: 5,
  alignItems: "flex-start",
  justifyContent: "space-between",
});

export const main_words_list_item = style({
  width: 120,
  height: 120,
  borderRadius: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 22,
  fontWeight: 500,
  color: root.color.COLOR_09,
  border: `10px solid ${root.color.POINT_03}`,
  background:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
});
