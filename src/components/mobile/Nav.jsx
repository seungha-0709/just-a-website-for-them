import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction as MuiBottomNavigationAction,
  styled,
  Snackbar,
  Alert,
} from "@mui/material";

import IconCounsel from "@/assets/icons/IconCounsel";
import IconKakaotalk from "@/assets/icons/IconKakaotalk";
import IconPlace from "@/assets/icons/IconPlace";
import IconPhone from "@/assets/icons/IconPhone";
import CounselModal from "./CounselModal";
import { useState, useEffect } from "react";
import { root } from "@/styles/root.css";
import { addMember } from "../../../lib/admin";
import { mail_bottom_sheet_container } from "@/styles/mobileStyle.css";

const drawerBleeding = 56;

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

const Nav = ({ isRender }) => {
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [isClicked, setIsClicked] = useState({
    kakao: 0,
    tel: 0,
    place: 0,
    mail: 0,
  });

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
  }, [isClicked.kakao, isRender]);

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
    if (window && isRender) {
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
  }, [isClicked.place, isRender]);

  const handleKakaoClick = () => {
    setIsClicked({
      ...isClicked,
      kakao: isClicked.kakao++,
    });
    window.open("https://pf.kakao.com/_TsAxdG");
  };

  const handleMailClick = () => {
    setOpen(true);
    // addMember({});
    // setIsMailModalOpen(true);
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
      <BottomNavigation
        style={{
          height: 100,
          zIndex: 100,
        }}
        showLabels
      >
        <BottomNavigationAction
          onClick={handleMailClick}
          id="mail_mobile"
          label={
            <span>
              무료
              <br />
              상담 문의
            </span>
          }
          icon={<IconCounsel />}
        />
        <BottomNavigationAction
          onClick={handleKakaoClick}
          label={
            <span>
              무료
              <br />
              카톡 문의
            </span>
          }
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
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {open && (
          <div className={mail_bottom_sheet_container}>
            <CounselModal
              onOpenSnackbar={() => setIsSnackbarOpen(true)}
              isRender={isRender}
              onClose={toggleDrawer(false)}
            />
          </div>
        )}
      </SwipeableDrawer>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isSnackbarOpen}
        autoHideDuration={3000}
      >
        <Alert severity="success" sx={{ width: "90%" }}>
          상담 문의 메일이 성공적으로 전송되었습니다.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Nav;
