import Image from "next/image";
import { reviews_backgroundStyle, reviews_section } from "@/styles/style.css";

const Place = () => {
  return (
    <section id="reviews" className={reviews_section}>
      <Image
        src="/bg_3.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        className={reviews_backgroundStyle}
      />
    </section>
  );
};

export default Place;
