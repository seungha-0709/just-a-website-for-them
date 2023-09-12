import {
  profileSection,
  profile_container,
  profile_kong_container,
  profile_pic_1,
  profile_pic_2,
  profile_title_text,
  flex,
  name,
  ul,
  li_strong,
  li_span,
  profile_kong,
  profile_jeong,
  profile_jeong_container,
  profile_kong_backgroundStyle,
  profile_jeong_backgroundStyle,
} from "@/styles/style.css.ts";
import { kongJiYeon, jeongJinKwon } from "@/data/profile";

import Image from "next/image";

const Profile = () => {
  return (
    <section id="profile" className={profileSection}>
      <div className={profile_kong}>
        <Image
          src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_kong.png"
          alt="법무법인 소울 - 공지연 & 정진권 변호사"
          fill
          loading="lazy"
          quality={100}
          className={profile_kong_backgroundStyle}
        />
        <div className={profile_kong_container}>
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
      <div className={profile_jeong}>
        <Image
          src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_jeong.png"
          alt="법무법인 소울 - 공지연 & 정진권 변호사"
          fill
          quality={100}
          className={profile_jeong_backgroundStyle}
        />
        <div className={profile_jeong_container}>
          <h2 className={profile_title_text}>
            변호사 <em className={name}>정 진 권</em>
          </h2>

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
      </div>
    </section>
  );
};

export default Profile;
