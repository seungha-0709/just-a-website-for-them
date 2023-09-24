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
import Lottie from "react-lottie";
import * as animationData from "@/assets/lottie/law.json";
import * as clickAnimationData from "@/assets/lottie/click.json";
import * as clickMainAnimationData from "@/assets/lottie/clickMain3.json";
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
    icon: <LocalPoliceIcon style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "상속",
    icon: <ReceiptLongIcon style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "교통사고",
    icon: <CarCrashIcon style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "손해배상",
    icon: <GavelIcon style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "스타트업",
    icon: <BusinessIcon style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "외국인 관련",
    icon: <PublicIcon style={{ fontSize: 24, paddingTop: 3 }} />,
  },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const clickOptions = {
  loop: true,
  autoplay: true,
  animationData: clickAnimationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const clickMainOptions = {
  loop: true,
  autoplay: true,
  animationData: clickMainAnimationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SwipeableDrawer = styled(MuiSwipeableDrawer)(() => ({
  "& .MuiPaper-root": {
    borderRadius: "20px 20px 0 0",
  },
}));

const Main = ({ isRender }) => {
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

  const handleKakaoClick = () => {
    setIsClicked({
      ...isClicked,
      kakao: isClicked.kakao++,
    });
    window.open("https://pf.kakao.com/_TsAxdG");
  };

  const handleMailClick = () => {
    setOpen(true);
  };

  const handleTelClick = () => {
    setIsClicked({
      ...isClicked,
      tel: isClicked.tel++,
    });
    window.location.href = "tel:01079340883";
  };

  const handleMailSubmitComplete = () => {
    setIsSnackbarOpen(false);
    setIsClicked({
      ...isClicked,
      mail: isClicked.mail++,
    });
  };

  useEffect(() => {
    if (window && isRender) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "mail_submit_mobile", //광고주 측에서 설정하고 싶은 값(default convType)
        convType: "mail_submit_mobile", //etc, join, login
        click: "#mail_submit_mobile", //click으로 전환 잡을 경우 css selector 값
      });
    }
  }, [isClicked.mail, isRender]);

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

  return (
    <section id="main" className={mainSection}>
      <div
        style={{
          height: 500,
        }}
      >
        <div className={main_title_area}>
          <MainSvg
            style={{
              position: "absolute",
              bottom: -500,
              right: 0,
              maxHeight: 768,
              zIndex: 0,
            }}
          />
          <p
            style={{
              color: root.color2.COLOR_05,
              fontWeight: 500,
              fontSize: 14,
              marginBottom: 16,
              position: "absolute",
              right: 0,
            }}
          >
            최고의 전문가가 함께합니다
          </p>
          <div style={{ position: "absolute", left: 0, top: -9 }}>
            <Lottie options={defaultOptions} height={100} width={150} />
          </div>
          <div style={{ position: "absolute", right: 0, top: 30 }}>
            <MainText />
          </div>

          <p
            style={{
              color: root.color2.GRAY_01,
              fontWeight: 500,
              fontSize: 16,
              marginTop: 28,
              lineHeight: 1.5,
              position: "relative",
              right: 0,
              top: 130,
              textAlign: "right",
              zIndex: 5,
            }}
          >
            <span style={{ background: root.color.WHITE }}>
              &quot;당신의 정의, 오직 당신을 위한 공정&quot;
              <br />
              최적의 방법으로 당신만을 위해 싸우겠습니다
            </span>
          </p>

          <Button
            style={{
              position: "absolute",
              right: 0,
              top: 160,
              fontSize: 14,
              fontWeight: 400,
              height: 42,
              marginTop: 30,
              width: "fit-content",
              padding: "8px 22px",
              background: root.color.POINT_02,
              color: root.color.WHITE,
            }}
            onClick={handleMailClick}
          >
            지금 당장 무료로 법률 상담을 받아보세요
            <Lottie options={clickMainOptions} height={40} width={40} />
          </Button>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          top: 0,
          height: 170,
          borderRadius: 18,
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
          bottom: -20,
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
            color: root.color.WHITE,
            background: root.color2.BLACK,
            // border: `2px solid ${root.color2.COLOR_04}`,
          }}
          onClick={handleTelClick}
        >
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <IconPhone />
          </div>
          <div style={{ position: "absolute", top: 80, right: 12 }}>
            <Lottie options={clickOptions} height={60} width={38} />
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
            color: root.color.WHITE,
            background: root.color2.BLACK,
            // border: `2px solid ${root.color2.COLOR_04}`,
          }}
        >
          <div style={{ position: "absolute", top: 0, right: 8 }}>
            <IconKakaotalk />
          </div>
          <div style={{ position: "absolute", top: 80, right: 12 }}>
            <Lottie options={clickOptions} height={60} width={38} />
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
        autoHideDuration={2000}
        onClose={handleMailSubmitComplete}
      >
        <Alert severity="success" sx={{ width: "90%" }}>
          상담 문의 메일이 성공적으로 전송되었습니다.
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Main;
