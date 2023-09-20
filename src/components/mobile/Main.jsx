import {
  mainSection,
  main_content_text,
  main_title_area,
  main_title_text,
  main_title_em,
  main_title_main_text,
  main_words_list_container,
  main_words_list_item,
  mail_bottom_sheet_container,
} from "@/styles/mobileStyle.css.ts";

import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GavelIcon from "@mui/icons-material/Gavel";

import MainSvg from "@/assets/svgs/MainSvg.svg";
import { TextField as MuiTextField, styled } from "@mui/material";
import { root } from "@/styles/root.css";
import Button from "../ui/Button";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import IconKakaotalk from "@/assets/icons/IconKakaotalk";
import IconPhone from "@/assets/icons/IconPhone";
import { useState, useEffect } from "react";
import {
  Snackbar,
  SwipeableDrawer as MuiSwipeableDrawer,
  Alert,
} from "@mui/material";
import CounselModal from "./CounselModal";
import MainText from "@/assets/svgs/mainText.svg";

const drawerBleeding = 56;

const WORDS_LIST = [
  {
    label: "형사",
    icon: <LocalPoliceIcon style={{ fontSize: 32 }} />,
  },
  {
    label: "상속",
    icon: <ReceiptLongIcon style={{ fontSize: 32 }} />,
  },
  {
    label: "교통사고",
    icon: <CarCrashIcon style={{ fontSize: 32 }} />,
  },
  {
    label: "손해배상",
    icon: <GavelIcon style={{ fontSize: 32 }} />,
  },
  {
    label: "스타트업",
    icon: <BusinessIcon style={{ fontSize: 32 }} />,
  },
  {
    label: "외국인 관련",
    icon: <PublicIcon style={{ fontSize: 32 }} />,
  },
];

const SwipeableDrawer = styled(MuiSwipeableDrawer)(() => ({
  "& .MuiPaper-root": {
    borderRadius: "20px 20px 0 0",
  },
}));

const TextField = styled(MuiTextField)(() => ({
  background: root.color.WHITE,
  color: root.color.COLOR_03,
  display: "absolute",
  top: 20,
  width: "90%",
  margin: "0 auto",
  display: "block",
  "& .MuiInputBase-root": {
    borderRadius: 60,
    width: "100%",
    border: "none",
    boxShadow: `0px 0px 8px ${root.color2.COLOR_04}`,
  },
  "& input": {
    width: "100%",
    display: "block",
    padding: "16px 24px",
  },
  "&:active": {
    border: "none",
  },
}));

const Main = ({ isRender }) => {
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
    if (window && isRender) {
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
    if (window && isRender) {
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
  }, [isClicked.tel, isRender]);

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
    <section id="main" className={mainSection}>
      <div
        style={{
          height: 500,
        }}
      >
        <div className={main_title_area}>
          {/* <p className={main_title_text}>
            <em className={main_title_em}>공.정.</em>
            <span className={main_title_main_text}>한 변호사</span>
            <br />
            Only for Client&apos;s Justice
          </p> */}
          <MainSvg
            style={{
              position: "absolute",
              bottom: -280,
              right: 0,
              height: 250,
              zIndex: 0,
            }}
          />
          <p
            style={{
              color: root.color2.COLOR_05,
              fontWeight: 500,
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            최고의 전문가가 함께합니다
          </p>
          <MainText />
          <p
            style={{
              color: root.color2.GRAY_01,
              fontWeight: 500,
              fontSize: 16,
              marginTop: 20,
              lineHeight: 1.5,
              position: "relative",
              zIndex: 5,
            }}
          >
            &quot;당신의 정의, 오직 당신을 위한 공정&quot;
            <br />
            최적의 방법으로 당신만을 위해 싸우겠습니다
          </p>
          <Button
            style={{
              fontSize: 14,
              fontWeight: 400,
              height: 42,
              marginTop: 30,
              width: "fit-content",
              padding: "8px 24px",
              background: root.color2.BLUE_02,
              color: root.color.WHITE,
            }}
            onClick={handleMailClick}
          >
            지금 당장 무료로 법률 상담을 받아보세요
            <SendRoundedIcon style={{ marginLeft: 8 }} />
          </Button>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          top: 80,
          height: 170,
          borderRadius: 18,
          background: "#EFE2C2",
          // border: `2px solid ${root.color2.COLOR_02}`,
        }}
      >
        <div className={main_words_list_container}>
          {WORDS_LIST.map((word) => {
            return (
              <div className={main_words_list_item} key={word.label}>
                <div>{word.icon}</div>
                {word.label}
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "relative",
          bottom: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Button
          style={{
            display: "block",
            margin: "0px",
            width: "50%",
            height: 150,
            borderRadius: 16,
            padding: "0 16px",
            textAlign: "left",
            position: "relative",
            color: root.color2.COLOR_01,
            background: root.color.WHITE,
            border: `2px solid ${root.color2.COLOR_04}`,
          }}
          onClick={handleTelClick}
        >
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <IconPhone />
          </div>
          <br />
          <br />
          <br />
          <span style={{ textAlign: "left" }}>
            무료
            <br />
            전화 상담
          </span>
        </Button>
        <Button
          onClick={handleKakaoClick}
          style={{
            display: "block",
            margin: "0px",
            width: "50%",
            height: 150,
            borderRadius: 16,
            padding: "0px 16px",
            textAlign: "left",
            position: "relative",
            color: root.color2.COLOR_01,
            background: root.color.WHITE,
            border: `2px solid ${root.color2.COLOR_04}`,
          }}
        >
          <div style={{ position: "absolute", top: 0, right: 8 }}>
            <IconKakaotalk />
          </div>
          <br />
          <br />
          <br />
          무료
          <br />
          카카오톡 상담
        </Button>
      </div>
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
    </section>
  );
};

export default Main;
