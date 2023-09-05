import {
  mainSection,
  main_content_text,
  main_title_area,
  main_title_text,
  mainBackgroundStyle,
  main_title_em,
  main_title_main_text,
} from "@/styles/style.css.ts";
import Button from "./ui/Button";
import Image from "next/image";
import { Storage } from "aws-amplify";
import { useState, useEffect } from "react";

const Main = (props) => {
  const [images, setImages] = useState([]);
  const getUploadedImage = async () => {
    const file = await Storage.get("main_bg.png", {
      level: "public",
    });
    setImages(file);
  };
  useEffect(() => {
    getUploadedImage();
  }, []);

  return (
    <section id="main" className={mainSection}>
      <Image
        src={images}
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        priority
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
  );
};

export default Main;
