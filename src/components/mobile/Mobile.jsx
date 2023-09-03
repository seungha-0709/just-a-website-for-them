import { root } from "@/styles/root.css";
import { BottomNavigation as MuiBottomNavigation, styled } from "@mui/material";
import { BottomNavigationAction as MuiBottomNavigationAction } from "@mui/material";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Main from "./Main";
import Profile from "./Profile";
import Blogs from "./Blogs";
import Success from "./Success";

const BottomNavigation = styled(MuiBottomNavigation)(() => ({
  background: root.color.COLOR_01,
}));

const BottomNavigationAction = styled(MuiBottomNavigationAction)(() => ({
  //   "& .MuiBottomNavigationAction-label": {
  color: root.color.COLOR_08,
  fontSize: 10,
  position: "relative",
  zIndex: 5,
  FontFace: "Pretendard",
  //   },
}));

const Mobile = ({ posts, success, featuredPosts }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Main />
      <Profile />
      <Blogs blogPosts={posts} featuredPosts={featuredPosts} />
      <Success examples={success} />
      <BottomNavigation
        showLabels
        value={tabIndex}
        onChange={(event, newValue) => {
          setTabIndex(newValue);
        }}
      >
        <BottomNavigationAction label="상담 문의" />
        <BottomNavigationAction label="카톡 문의" />
        <BottomNavigationAction label="오시는 길" />
        <BottomNavigationAction label="대표 전화" />
        <BottomNavigationAction label="업무 시간" />
      </BottomNavigation>
    </>
  );
};

export default Mobile;
