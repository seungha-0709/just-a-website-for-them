import Image from "next/image";
import { place_backgroundStyle, place_section } from "@/styles/mobileStyle.css";
import { useEffect } from "react";

const Place = () => {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(523954.0, 1084098.0),
          level: 3,
        };

        const map = window.kakao.maps.Map(container, options);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <section id="place" className={place_section}>
      <Image
        src="/bg_3.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        className={place_backgroundStyle}
      />
      <div
        id="map"
        style={{ width: "90%", height: 250, margin: "0 auto" }}
      ></div>
    </section>
  );
};

export default Place;
