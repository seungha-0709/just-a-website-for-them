import Image from "next/image";
import {
  place_backgroundStyle,
  place_section,
  success_content_area,
  success_title,
} from "@/styles/mobileStyle.css";
import { Map, MapMarker, StaticMap } from "react-kakao-maps-sdk";
import { root } from "@/styles/root.css";

const Place = () => {
  return (
    <section id="place" className={place_section}>
      <Image
        src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/mobile/mobile_bg_3.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        loading="lazy"
        className={place_backgroundStyle}
      />
      <div className={success_content_area}>
        <h2
          style={{ color: root.color.COLOR_01, marginTop: 50 }}
          className={success_title}
        >
          오시는 길
        </h2>
        <p
          style={{
            textAlign: "center",
            color: root.color.COLOR_04,
            fontWeight: 400,
            margin: "40px 0",
          }}
        >
          서울 서초구 강남대로 623
          <br />
          법무법인 소울
        </p>
        <StaticMap
          onClick={() => window.open("https://kko.to/5gtm6q2CpD")}
          center={{ lat: 37.517341, lng: 127.018772 }}
          marker={{ lat: 37.517341, lng: 127.018772 }}
          style={{ width: 300, height: 250 }}
        />
        {/* <MapMarker position={{ lat: 37.517413, lng: 127.028738 }}>
            <div style={{ color: "#000" }}>법무법인 소울</div>
          </MapMarker> */}
      </div>
    </section>
  );
};

export default Place;
