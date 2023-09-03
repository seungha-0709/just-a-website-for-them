import { globalNav, globalNav_button } from "@/styles/style.css";
import { root } from "@/styles/root.css";
import IconCounsel from "@/assets/icons/IconCounsel";
import IconKakaotalk from "@/assets/icons/IconKakaotalk";
import IconPhone from "@/assets/icons/IconPhone";
import IconPlace from "@/assets/icons/IconPlace";
import {
  Paper,
  Button as MuiButton,
  BottomNavigation as MuiBottomNavigation,
  styled,
} from "@mui/material";
import { BottomNavigationAction as MuiBottomNavigationAction } from "@mui/material";
import { useState, useEffect } from "react";

const BottomNavigation = styled(MuiBottomNavigation)(() => ({
  "&.MuiBottomNavigation-root": {
    background: root.color.COLOR_01,
    position: "relative",
    top: "-50%",
    left: 0,
    zIndex: 20,
    width: 120,
    height: 480,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
    // borderTop: `1px solid ${root.color.COLOR_05}`,
  },
  "& .MuiButtonBase-root": {
    width: 120,
    height: 140,
    padding: 20,
    fontSize: 16,
    border: `1px solid ${root.color.COLOR_05}`,
    borderTop: "none",
  },
  "& .Mui-selected": {
    fontSize: 16,
    color: root.color.COLOR_08,
  },
}));

const BottomNavigationAction = styled(MuiBottomNavigationAction)(() => ({
  "& .MuiBottomNavigationAction-label": {
    marginTop: 8,
    color: root.color.COLOR_08,
    fontSize: 16,
    zIndex: 5,
    fontFamily: "Pretendard",
  },
  "& .Mui-selected": {
    fontSize: 16,
    color: root.color.COLOR_08,
  },
  "&:active": {
    color: root.color.COLOR_08,
    background: root.color.COLOR_03,
  },
}));

const Nav = ({ slickGoTo }) => {
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
    window.location.href = "tel:01096129677";
  };
  const handlePlaceClick = () => {
    setIsClicked({
      ...isClicked,
      place: isClicked.place++,
    });
    window.location.href = "#place";
  };

  return (
    <nav className={globalNav}>
      <BottomNavigation
        showLabels
        value={tabIndex}
        onChange={(event, newValue) => {
          setTabIndex(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ borderTop: `1px solid ${root.color.COLOR_05}` }}
          label="상담 문의"
          icon={<IconCounsel />}
        />
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
    </nav>
  );
};

export default Nav;
