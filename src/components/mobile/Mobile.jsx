import { root } from "@/styles/root.css";
import { BottomNavigation as MuiBottomNavigation, styled } from "@mui/material";
import { BottomNavigationAction as MuiBottomNavigationAction } from "@mui/material";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Main from "./Main";
import Profile from "./Profile";
import Blogs from "./Blogs";
import Success from "./Success";
import IconCounsel from "@/assets/icons/IconCounsel";
import IconKakaotalk from "@/assets/icons/IconKakaotalk";
import IconPlace from "@/assets/icons/IconPlace";
import IconPhone from "@/assets/icons/IconPhone";
import Place from "./Place";
import { useEffect } from "react";

const BottomNavigation = styled(MuiBottomNavigation)(() => ({
  background: root.color.COLOR_01,
  position: "fixed",
  bottom: 0,
  zIndex: 20,
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  borderTop: `1px solid ${root.color.COLOR_05}`,
  "& .Mui-selected": {
    fontSize: 14,
    color: root.color.COLOR_08,
  },
}));

const BottomNavigationAction = styled(MuiBottomNavigationAction)(() => ({
  //   "& .MuiBottomNavigationAction-label": {
  color: root.color.COLOR_08,
  fontSize: 14,
  zIndex: 5,
  fontFace: "Pretendard",
  width: "100%",
  borderRight: `1px solid ${root.color.COLOR_05}`,
  //   },
  "&:active": {
    color: root.color.COLOR_08,
    background: root.color.COLOR_03,
  },
}));

const Mobile = ({ posts, success, featuredPosts }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isClicked, setIsClicked] = useState({
    kakao: 0,
    tel: 0,
    place: 0,
  });

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "kakao_mobile", //광고주 측에서 설정하고 싶은 값(default convType)
        convType: "etc", //etc, join, login
        click: "", //click으로 전환 잡을 경우 css selector 값
      });
    }
  }, [isClicked.kakao]);

  const handleKakaoClick = () => {
    setIsClicked({
      ...isClicked,
      kakao: isClicked.kakao++,
    });
    window.open("https://pf.kakao.com/_TsAxdG");
  };

  const handleTelClick = () => {
    setIsClicked({
      ...isClicked,
      tel: isClicked.tel++,
    });
    document.location.href("tel:01096129677");
  };
  const handlePlaceClick = () => {
    setIsClicked({
      ...isClicked,
      place: isClicked.place++,
    });
    document.location.href("#place");
  };

  return (
    <>
      <AppBar
        position="fixed"
        style={{ height: 60, background: root.color.COLOR_01 }}
      />
      <div style={{ paddingTop: 60 }}>
        <Main />
        <Profile />
        <Blogs blogPosts={posts} featuredPosts={featuredPosts} />
        <Success examples={success} />
        <Place />
      </div>
      <BottomNavigation
        style={{
          height: 100,
        }}
        showLabels
        value={tabIndex}
        onChange={(event, newValue) => {
          setTabIndex(newValue);
        }}
      >
        <BottomNavigationAction label="상담 문의" icon={<IconCounsel />} />
        <BottomNavigationAction
          onClick={handleKakaoClick}
          label="카톡 문의"
          icon={<IconKakaotalk />}
        />
        <BottomNavigationAction
          onClick={handlePlaceClick}
          label="오시는 길"
          icon={<IconPlace />}
        />
        <BottomNavigationAction
          onClick={handleTelClick}
          label="대표 전화"
          icon={<IconPhone />}
        />
      </BottomNavigation>
    </>
  );
};

export default Mobile;
