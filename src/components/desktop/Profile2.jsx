import {
  ul,
  li_span,
  li_strong,
  profile_title_text,
  name,
} from "@/styles/style.css";
import { jeongJinKwon, kongJiYeon } from "@/data/profile";
import { root } from "@/styles/root.css";
import Image from "next/image";

const Profile2 = () => {
  return (
    <>
      <div
        id="profile"
        style={{ width: "100%", height: 600, background: root.color.COLOR_03 }}
      >
        <div
          style={{
            width: 1200,
            height: 600,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Image
            src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_kong_solo.png"
            alt="법무법인 소울 - 공지연 & 정진권 변호사"
            width={300}
            objectFit="contain"
            height={450}
            loading="lazy"
            quality={100}
            style={{
              position: "absolute",
              bottom: 0,
              right: 160,
              filter: "grayscale(20%)",
              opacity: 0.8,
            }}
          />
          <div style={{ position: "absolute", bottom: 60, left: 200 }}>
            <h2 className={profile_title_text}>
              변호사 <em className={name}>공 지 연</em>
            </h2>
            <ul className={ul}>
              <li>
                <span className={li_span}>{kongJiYeon.education.name}</span>
              </li>
              {kongJiYeon.education.content.map((item) => {
                return (
                  <li key={item}>
                    <strong className={li_strong}>{item}</strong>
                  </li>
                );
              })}

              <li>
                <span style={{ marginTop: 28 }} className={li_span}>
                  경력
                </span>
              </li>
              {kongJiYeon.experience.content.map((item) => {
                return (
                  <li key={item}>
                    <strong className={li_strong}>{item}</strong>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{ width: "100%", height: 500, background: root.color.POINT_04 }}
      >
        <div
          style={{
            width: 1200,
            height: 500,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Image
            src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_jeong_solo.png"
            alt="법무법인 소울 - 공지연 & 정진권 변호사"
            width={300}
            objectFit="contain"
            height={450}
            loading="lazy"
            quality={100}
            style={{
              position: "absolute",
              bottom: 0,
              left: 160,
              filter: "grayscale(10%)",
              opacity: 0.8,
            }}
          />
          <div style={{ position: "absolute", bottom: 60, right: 200 }}>
            <h2 className={profile_title_text}>
              변호사 <em className={name}>정 진 권</em>
            </h2>
            <ul className={ul}>
              <li>
                <span className={li_span}>{kongJiYeon.education.name}</span>
              </li>
              {jeongJinKwon.education.content.map((item) => {
                return (
                  <li key={item}>
                    <strong className={li_strong}>{item}</strong>
                  </li>
                );
              })}

              <li>
                <span style={{ marginTop: 28 }} className={li_span}>
                  경력
                </span>
              </li>
              {jeongJinKwon.experience.content.map((item) => {
                return (
                  <li key={item}>
                    <strong className={li_strong}>{item}</strong>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile2;
