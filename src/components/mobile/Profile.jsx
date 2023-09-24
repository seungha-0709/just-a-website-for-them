import { jeongJinKwon, kongJiYeon } from "@/data/profile";
import {
  profileSection,
  profile_title_text,
  flex,
  name,
  ul,
  li_strong,
  li_span,
  profile_kong,
  profile_jeong,
} from "@/styles/mobileStyle.css.ts";
import { root } from "@/styles/root.css";

import Image from "next/image";

const Profile = () => {
  return (
    <section id="profile" className={profileSection}>
      <div className={profile_kong}>
        <div className={profile_title_text}>
          변호사 <em className={name}>공 지 연</em>
          <div
            style={{
              width: 100,
              height: 100,
              background: root.color.COLOR_08,
              borderRadius: 90,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              paddingLeft: 20,
              paddingTop: 4,
              boxSizing: "border-box",
              position: "absolute",
              top: 40,
              right: 20,
            }}
          >
            <Image
              src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_kong_solo.png"
              width={100}
              height={160}
              objectFit="contain"
              alt="공지연 변호사"
            />
          </div>
        </div>
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
      <div className={profile_jeong}>
        <div className={profile_title_text}>
          변호사 <em className={name}>정 진 권</em>
          <div
            style={{
              width: 100,
              height: 100,
              background: root.color.COLOR_08,
              borderRadius: 90,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              paddingTop: 4,
              boxSizing: "border-box",
              position: "absolute",
              top: 40,
              right: 20,
            }}
          >
            <Image
              src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_jeong_solo.png"
              width={120}
              height={180}
              objectFit="contain"
              alt="정진권 변호사"
            />
          </div>
        </div>
        <ul className={ul}>
          <li>
            <span className={li_span}>{jeongJinKwon.education.name}</span>
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
    </section>
  );
};

export default Profile;
