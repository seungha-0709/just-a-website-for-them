import Image from "next/image";
import {
  place_backgroundStyle,
  place_content_area,
  place_section,
  success_content_area,
  success_title,
} from "@/styles/mobileStyle.css";
import { Map, MapMarker, StaticMap } from "react-kakao-maps-sdk";
import { root } from "@/styles/root.css";
import useKakaoLoader from "@/hooks/useKakaoLoader";

const Place = () => {
  useKakaoLoader();
  return (
    <section id="place" className={place_section}>
      {/* <Image
        src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/mobile/mobile_bg_3.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        loading="lazy"
        className={place_backgroundStyle}
      /> */}
      <div className={place_content_area}>
        <h2
          style={{ color: root.color.COLOR_01, marginTop: 0 }}
          className={success_title}
        >
          오시는 길
        </h2>
        <p
          style={{
            color: root.color.COLOR_04,
            fontWeight: 400,
            margin: "40px 0",
            paddingLeft: 20,
          }}
        >
          서울 서초구 강남대로 623
          <br />
          법무법인 소울
        </p>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Map
            zoomable={false}
            draggable={true}
            level={3}
            onClick={() => window.open()}
            center={{ lat: 37.517341, lng: 127.019772 }}
            style={{ width: 300, height: 250 }}
          >
            <MapMarker position={{ lat: 37.517341, lng: 127.019772 }}>
              <div style={{ color: "#000" }}>법무법인 소울</div>
            </MapMarker>
          </Map>
        </div>
      </div>
    </section>
  );
};

export default Place;
