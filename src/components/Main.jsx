import {
  mainSection,
  main_content_text,
  main_title_area,
  main_title_text,
  mainBackgroundStyle,
} from "@/styles/style.css.ts";
import Button from "./ui/Button";
import Image from "next/image";

const Main = (props) => {
  const { toNext } = props;

  return (
    <section id="main" className={mainSection}>
      <Image
        src="https://storage.googleapis.com/profile_image_0709/main_bg.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        className={mainBackgroundStyle}
      />
      <div className={main_title_area}>
        <p className={main_title_text}>
          어쩌고 저쩌고 무슨무슨 블라블라 이러쿵 저러쿵
          <br />
          소개 문구 어떻게 어떻게 뭐라뭐라 적어서 보내주세요
        </p>
        <p className={main_content_text}>
          계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도
          없이 가을 속의 별들을 다 헤일 듯합니다. 가슴속에 하나 둘 새겨지는 별을
          이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은
          까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 별 하나에 추억과 별
          하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별
          하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한마디씩
          불러 봅니다...
        </p>
      </div>
    </section>
  );
};

export default Main;
