import Image from "next/image";
import { reviews_backgroundStyle, reviews_section } from "@/styles/style.css";
import { useEffect } from "react";

const Place = () => {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(523954.0, 1084098.0),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <section id="place" className={reviews_section}>
      <Image
        src="/image/bg_3.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        className={reviews_backgroundStyle}
      />
      <div id="map" style={{ width: "90%", height: 300 }}></div>
    </section>
  );
};

export default Place;
