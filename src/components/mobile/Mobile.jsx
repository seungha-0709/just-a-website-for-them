import Image from "next/image";
import { root } from "@/styles/root.css";
import { BottomNavigation as MuiBottomNavigation, styled } from "@mui/material";
import { BottomNavigationAction as MuiBottomNavigationAction } from "@mui/material";
import { useState, useEffect } from "react";
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
import CounselModal from "./CounselModal";

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
  color: root.color.COLOR_08,
  fontSize: 14,
  zIndex: 5,
  fontFace: "Pretendard",
  width: "100%",
  borderRight: `1px solid ${root.color.COLOR_05}`,
  "& .MuiBottomNavigationAction-label": {
    fontSize: 14,
  },
  "&:active": {
    fontSize: 14,
    color: root.color.COLOR_08,
    background: root.color.COLOR_03,
  },
  "& .Mui-selected": {
    fontSize: 14,
    color: root.color.COLOR_08,
  },
}));

const Mobile = ({ posts, success, featuredPosts, isRender }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isClicked, setIsClicked] = useState({
    kakao: 0,
    tel: 0,
    place: 0,
    mail: 0,
  });
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);

  // useEffect(() => {
  //   if (window) {
  //     window.CallMtm =
  //       window.CallMtm ||
  //       function () {
  //         (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
  //       };

  //     CallMtm({
  //       productName: "mail_mobile", //광고주 측에서 설정하고 싶은 값(default convType)
  //       convType: "mail_mobile", //etc, join, login
  //       click: "#mail_mobile", //click으로 전환 잡을 경우 css selector 값
  //     });
  //   }
  // }, [isClicked.mail]);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "kakao_mobile",
        convType: "kakao_mobile",
        click: "#kakao_mobile",
      });
    }
  }, [isClicked.kakao]);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "tel_mobile",
        convType: "tel_mobile",
        click: "#tel_mobile",
      });
    }
  }, [isClicked.tel]);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "place_mobile",
        convType: "place_mobile",
        click: "#place_mobile",
      });
    }
  }, [isClicked.place]);

  const handleKakaoClick = () => {
    setIsClicked({
      ...isClicked,
      kakao: isClicked.kakao++,
    });
    window.open("https://pf.kakao.com/_TsAxdG");
  };

  const handleMailClick = () => {
    // setIsClicked({
    //   ...isClicked,
    //   mail: isClicked.mail++,
    // });
    setIsMailModalOpen(true);
  };

  const handleTelClick = () => {
    setIsClicked({
      ...isClicked,
      tel: isClicked.tel++,
    });
    window.location.href = "tel:01079340883";
  };
  const handlePlaceClick = () => {
    setIsClicked({
      ...isClicked,
      place: isClicked.place++,
    });
    window.location.href = "#place";
  };

  return (
    <div style={{ display: `${isRender ? "block" : "none"}` }}>
      <AppBar
        position="fixed"
        style={{
          height: 60,
          background: root.color.COLOR_01,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <Image
          src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/lawfirm_logo.png"
          width={90}
          height={40}
          alt="법무법인 소울"
          priority
        />
        <div />
      </AppBar>
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
          zIndex: 100,
        }}
        showLabels
        value={tabIndex}
      >
        <BottomNavigationAction
          onClick={handleMailClick}
          id="mail_mobile"
          label="상담 문의"
          icon={<IconCounsel />}
        />
        <BottomNavigationAction
          onClick={handleKakaoClick}
          label="카톡 문의"
          id="kakao_mobile"
          icon={<IconKakaotalk />}
        />
        <BottomNavigationAction
          onClick={handlePlaceClick}
          label="오시는 길"
          id="place_mobile"
          icon={<IconPlace />}
        />
        <BottomNavigationAction
          onClick={handleTelClick}
          label="대표 전화"
          id="tel_mobile"
          icon={<IconPhone />}
        />
      </BottomNavigation>
      <CounselModal
        isOpen={isMailModalOpen}
        onClose={() => setIsMailModalOpen(false)}
      />
    </div>
  );
};

export default Mobile;
