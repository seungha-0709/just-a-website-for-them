import Image from "next/image";
import { place_backgroundStyle, place_section } from "@/styles/mobileStyle.css";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

const Place = () => {
  // const { loading, error } = useKakaoLoader({
  //   appkey: process.env.NEXT_PIBLIC_KAKAO_JS_KEY, // 발급 받은 APPKEY
  // });
  return (
    <section id="place" className={place_section}>
      <Image
        src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/bg_3.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        loading="lazy"
        className={place_backgroundStyle}
      />

      <Map
        center={{ lat: 37.517413, lng: 127.028738 }}
        style={{ width: 260, height: 200 }}
      >
        <MapMarker position={{ lat: 37.517413, lng: 127.028738 }}>
          <div style={{ color: "#000" }}>법무법인 소울</div>
        </MapMarker>
      </Map>
    </section>
  );
};

export default Place;
