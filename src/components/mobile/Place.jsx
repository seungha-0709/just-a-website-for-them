import {
  place_content_area,
  place_section,
  success_title,
} from "@/styles/mobileStyle.css";
import Lottie from "react-lottie";
import * as animationData from "@/assets/lottie/map.json";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { root } from "@/styles/root.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Place = () => {
  const latLng = {
    lat: 37.517404,
    lng: 127.01876,
  };

  return (
    <section id="place_mobile" className={place_section}>
      <div style={{ position: "absolute", right: 20, top: -16, zIndex: 0 }}>
        <Lottie options={defaultOptions} height={180} width={180} />
      </div>
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
      </div>
      <div
        style={{
          display: "flex",
          height: 280,
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Map
          draggable
          id="map"
          level={3}
          onClick={() => window.open("https://kko.to/5gtm6q2CpD")}
          center={{ lat: latLng.lat, lng: latLng.lng }}
          style={{
            width: "100%",
            maxWidth: 600,
            minWidth: 300,
            height: 250,
            border: `1px solid ${root.color2.BLACK}`,
          }}
        >
          <MapMarker position={{ lat: latLng.lat, lng: latLng.lng }}>
            <div style={{ color: "#000" }}>법무법인 소울</div>
          </MapMarker>
        </Map>
      </div>
    </section>
  );
};

export default Place;
