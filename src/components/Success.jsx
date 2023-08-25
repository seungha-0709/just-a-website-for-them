import { success_backgroundStyle, success_section } from "@/styles/style.css";
import Image from "next/image";
import { mainBackgroundStyle } from "@/styles/style.css";

const Success = () => {
  return (
    <section id="success" className={success_section}>
      <Image
        src="https://storage.googleapis.com/profile_image_0709/bg_2.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        className={success_backgroundStyle}
      />
      성공 사례
    </section>
  );
};

export default Success;
