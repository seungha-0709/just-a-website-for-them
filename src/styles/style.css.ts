import { style } from "@vanilla-extract/css";
import { root } from "./root.css";

export const header = style({
  width: "100svw",
  height: 60,
  position: "fixed",
  top: 0,
  zIndex: 10,
  backgroundColor: root.color.COLOR_02,
  borderBottom: `1px solid ${root.color.COLOR_03}`,
});

export const mainSection = style({
  width: "100%",
  // overflowX: "hidden",
  height: "calc(100vh - 60px)",
  background: "url(/main-bg.jpg)",
  backgroundSize: "cover",
  position: "relative",
  zIndex: 8,
  ["::after"]: {
    content: "",
    display: "block",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right, rgba(10, 24, 45, 1), rgba(10, 24, 45, 0))",
  },
});

export const contents = style({
  width: "100svw",
  overflowX: "hidden",
  height: "fit-content",
  // position: "relative",
  background: root.color.WHITE_MAIN,
});

export const profileSection = style({
  width: "100%",
  height: "calc(100vh - 60px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: root.color.COLOR_08,
});

export const blogSection = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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

export const profile_item_container = style({
  width: "50%",
  height: "100%",
  color: root.color.COLOR_02,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: 40,
  boxSizing: "border-box",
  selectors: {
    ["&:first-of-type"]: {
      background: "url(/woman.jpg)",
      backgroundSize: "cover",
      backgroundPositionX: -300,
      backgroundRepeat: "no-repeat",
    },
    ["&:last-of-type"]: {
      background: "url(/man.jpg)",
      backgroundSize: "cover",
      backgroundPositionX: -300,
      backgroundRepeat: "no-repeat",
    },
  },
});

export const profile_title_text = style({
  fontSize: 20,
  fontWeight: 400,
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
  padding: 40,
  boxSizing: "border-box",
  margin: 0,
  fontWeight: 300,
  background: "rgba(255, 255, 255, 0.6)",
  height: 600,
  width: 500,
});

export const li_span = style({
  fontWeight: 300,
  color: root.color.COLOR_04,
  display: "block",
  width: 100,
  marginBottom: 4,
});
export const li_strong = style({
  fontWeight: 400,
  marginBottom: 24,
  display: "block",
});

export const main_title_area = style({
  position: "absolute",
  top: "50%",
  left: 64,
  transform: "translate(0%, -50%)",
});

export const main_title_text = style({
  fontSize: 44,
  color: root.color.COLOR_07,
  fontWeight: 600,
  margin: 0,
});

export const main_content_text = style({
  fontSize: 16,
  color: root.color.COLOR_06,
  fontWeight: 300,
  letterSpacing: 1,
});
