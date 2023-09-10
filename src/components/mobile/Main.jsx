import {
  mainSection,
  main_content_text,
  main_title_area,
  main_title_text,
  mainBackgroundStyle,
  main_title_em,
  main_title_main_text,
} from "@/styles/mobileStyle.css.ts";
import Image from "next/image";

const WORDS_LIST = [
  "형사",
  "교통사고",
  "손해배상",
  "스타트업",
  "공공조달",
  "외국인",
];

const Main = (props) => {
  return (
    <section id="main" className={mainSection}>
      <Image
        src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/mobile/mobile_main_bg.png"
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
      <div>
        {WORDS_LIST.map((word) => {
          return <div key={word}>{word}</div>;
        })}
      </div>
    </section>
  );
};

export default Main;
