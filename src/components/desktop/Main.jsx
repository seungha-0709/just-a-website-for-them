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
} from "@/styles/style.css.ts";
import Image from "next/image";

const WORDS_LIST = [
  "형사",
  "상속",
  "교통사고",
  "손해배상",
  "스타트업",
  "외국인",
];

const Main = () => {
  return (
    <section id="main" className={mainSection}>
      <div style={{ width: "100%", height: 500, position: "relative" }}>
        <Image
          src={
            "https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/main_bg_horizontal.png"
          }
          alt="법무법인 소울 - 공지연 & 정진권 변호사"
          fill
          quality={100}
          priority
          className={mainBackgroundStyle}
          style={{
            filter: "grayscale(20%)",
          }}
        />
      </div>
      <div
        style={{ position: "absolute", left: "20%" }}
        className={main_title_area}
      >
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
      <div className={main_words_list_container}>
        {WORDS_LIST.map((word) => {
          return (
            <div className={main_words_list_item} key={word}>
              {word}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
