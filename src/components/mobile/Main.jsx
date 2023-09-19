import {
  mainSection,
  main_content_text,
  main_title_area,
  main_title_text,
  mainBackgroundStyle,
  main_title_em,
  main_title_main_text,
  main_words_list_container,
  main_words_list_item,
  main_words_list_bg,
} from "@/styles/mobileStyle.css.ts";
import Image from "next/image";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GavelIcon from "@mui/icons-material/Gavel";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import MainSvg from "@/assets/svgs/MainSvg.svg";
import { TextField as MuiTextField, styled } from "@mui/material";
import { root } from "@/styles/root.css";
import Button from "../ui/Button";

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

const TextField = styled(MuiTextField)(() => ({
  background: root.color.WHITE,
  color: root.color.COLOR_03,
  display: "absolute",
  top: 20,
  width: "85%",
  margin: "0 auto",
  display: "block",
  "& .MuiInputBase-root": {
    borderRadius: 60,
    width: "100%",
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

const Main = (props) => {
  return (
    <>
      <section id="main" className={mainSection}>
        <div
          style={{
            width: "100%",
            height: 500,
            display: "flex",
            flexDirection: "row-reverse",
            flexWrap: "nowrap",
            justifyContent: "space-around",
          }}
        >
          <MainSvg style={{ position: "absolute", top: 220, height: 400 }} />
          <div className={main_title_area}>
            <p className={main_title_text}>
              <em className={main_title_em}>공.정.</em>
              <span className={main_title_main_text}>한 변호사</span>
              <br />
              Only for Client&apos;s Justice
            </p>
            <TextField placeholder="무료로 법률 상담을 신청해보세요." />
            <p className={main_content_text}>
              &quot;당신의 정의, 당신만을 위한 공정&quot;
              <br />
              최적의 방법으로 당신만을 위해 싸우겠습니다.
            </p>
          </div>
        </div>
      </section>
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
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Button style={{ display: "block", margin: "0 30px" }}>
          무료 전화 상담
        </Button>
        <Button style={{ display: "block", margin: "0 30px" }}>
          무료 카카오톡 상담
        </Button>
      </div>
    </>
  );
};

export default Main;
