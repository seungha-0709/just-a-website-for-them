import {
  mainSection,
  main_content_text,
  main_title_area,
  main_title_text,
} from "@/styles/style.css.ts";
import Button from "./ui/Button";

const Main = (props) => {
  const { toNext } = props;

  return (
    <section className={mainSection}>
      <div className={main_title_area}>
        <p className={main_title_text}>
          어쩌고 저쩌고 무슨무슨 블라블라 이러쿵 저러쿵
          <br />
          소개 문구 어떻게 어떻게 뭐라뭐라 적어서 보내주세요
        </p>
        <p className={main_content_text}>
          여기에는 작은 글씨로 무슨무슨 부연 설명들이 들어가면 좋을 것 같아요
        </p>
        <div>
          <Button onClick={toNext} variant="contained" size="large">
            변호사 소개
          </Button>
          <Button variant="contained" size="large">
            상담 문의
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
