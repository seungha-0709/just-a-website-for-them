import Image from "next/image";
import { place_backgroundStyle, place_section } from "@/styles/mobileStyle.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";

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
