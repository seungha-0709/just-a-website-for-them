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

const Main = (props) => {
  return (
    <>
      <section id="main" className={mainSection}>
        <Image
          src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/law_1.png"
          alt="법무법인 소울 - 공지연 & 정진권 변호사"
          fill
          priority
          quality={100}
          className={mainBackgroundStyle}
        />
        <div className={main_title_area}>
          <p className={main_title_text}>
            <em className={main_title_em}>공.정.</em>
            <span className={main_title_main_text}>한 변호사</span>
            <br />
            Only for Client&apos;s Justice
          </p>
          <p className={main_content_text}>
            &quot;당신의 정의, 당신만을 위한 공정&quot;
            <br />
            최적의 방법으로 당신만을 위해 싸우겠습니다.
          </p>
        </div>
      </section>
      <div className={main_words_list_container}>
        <Image
          src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/mobile/mobile_bg_0.png"
          alt="법무법인 소울 - 공지연 & 정진권 변호사"
          fill
          priority
          quality={100}
          className={main_words_list_bg}
        />
        {WORDS_LIST.map((word) => {
          return (
            <div className={main_words_list_item} key={word.label}>
              <div>{word.icon}</div>
              {word.label}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
