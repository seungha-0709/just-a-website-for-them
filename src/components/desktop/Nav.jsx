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
import CounselModal from "@/components/ui/CounselModal";

const BottomNavigation = styled(MuiBottomNavigation)(() => ({
  "&.MuiBottomNavigation-root": {
    background: root.color.COLOR_01,
    position: "relative",
    // top: "-50%",
    left: 0,
    zIndex: 20,
    width: 120,
    height: 480,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    gap: 0,
    // borderTop: `1px solid ${root.color.COLOR_05}`,
  },
  "& .MuiButtonBase-root": {
    width: 120,
    height: 120,
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
    // marginTop: 8,
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
    fontSize: 16,
    color: root.color.COLOR_08,
    background: root.color.COLOR_03,
  },
}));

const Nav = ({ isRender }) => {
  const [isClicked, setIsClicked] = useState({
    kakao: 0,
    tel: 0,
    place: 0,
    mail: 0,
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window && isRender) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "kakao_pc",
        convType: "kakao_pc",
        click: "#kakao_pc",
      });
    }
  }, [isClicked.kakao]);

  useEffect(() => {
    if (window && isRender) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "tel_pc",
        convType: "tel_pc",
        click: "#tel_pc",
      });
    }
  }, [isClicked.tel]);

  useEffect(() => {
    if (window && isRender) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "place_pc",
        convType: "place_pc",
        click: "#place_pc",
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
    setIsOpen(true);
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
    <>
      <nav className={globalNav}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            style={{
              borderTop: `1px solid ${root.color.COLOR_05}`,
              background: root.color.COLOR_01,
            }}
            label={
              <span>
                무료
                <br />
                상담 문의
              </span>
            }
            onClick={handleMailClick}
            icon={<IconCounsel />}
          />
          <BottomNavigationAction
            style={{ background: root.color.POINT_01 }}
            onClick={handleKakaoClick}
            label={
              <span>
                무료
                <br />
                카톡문의
              </span>
            }
            icon={<IconKakaotalk />}
          />
          <BottomNavigationAction
            style={{ background: root.color.POINT_04 }}
            onClick={handlePlaceClick}
            label="오시는 길"
            icon={<IconPlace />}
          />
          <BottomNavigationAction
            onClick={handleTelClick}
            style={{ background: root.color.BLACK }}
            label="대표 전화"
            icon={<IconPhone />}
          />
        </BottomNavigation>
      </nav>
      <CounselModal
        isRender={isRender}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Nav;
