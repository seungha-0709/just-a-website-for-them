import Image from "next/image";
import { placeSection, place_backgroundStyle } from "@/styles/style.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Place = () => {
  return (
    <section id="place" className={placeSection}>
      <Image
        src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/bg_3.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        loading="lazy"
        quality={100}
        className={place_backgroundStyle}
      />

      <Map
        center={{ lat: 37.517413, lng: 127.028738 }}
        style={{ width: 600, height: 400 }}
      >
        <MapMarker position={{ lat: 37.517413, lng: 127.028738 }}>
          <div style={{ color: "#000" }}>법무법인 소울</div>
        </MapMarker>
      </Map>
    </section>
  );
};

export default Place;
