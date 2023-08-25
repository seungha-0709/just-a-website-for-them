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

import Image from "next/image";

const Profile = () => {
  return (
    <section id="profile" className={profileSection}>
      <div className={profile_kong}>
        <Image
          src="https://storage.googleapis.com/profile_image_0709/profile_kongJiYeon.png"
          alt="법무법인 소울 - 공지연 & 정진권 변호사"
          fill
          quality={100}
          className={profile_kong_backgroundStyle}
        />
        <div className={profile_kong_container}>
          <h2 className={profile_title_text}>
            변호사 <em className={name}>공 지 연</em>
          </h2>
          <ul className={ul}>
            <li>
              <span className={li_span}>2023 ~ </span>
              <strong className={li_strong}>
                서울특별시 마을변호사 법률상담관
              </strong>
            </li>
            <li>
              <span className={li_span}>2023 ~ </span>
              <strong className={li_strong}>
                서울특별시 양천구청 전세사기피해 법률상담관
              </strong>
            </li>
            <li>
              <span className={li_span}>2023 ~ </span>
              <strong className={li_strong}>
                서울지방경찰청 혜화경찰서 경미범죄심사위원회 즉결심판위원
              </strong>
            </li>
            <li>
              <span className={li_span}>2022 ~ 2023</span>
              <strong className={li_strong}>
                법무법인 AK (형사, 가사, 행정)
              </strong>
            </li>
            <li>
              <span className={li_span}>2022 ~ 2022</span>
              <strong className={li_strong}>
                서울 서초구청 서초재능TV 생활법률담당 강연
                <br />
                (학교폭력, 조세상속, 공공주택, 반려동물)
              </strong>
            </li>
            <li>
              <span className={li_span}>2018 ~ 2018</span>
              <strong className={li_strong}>
                감사원 국방감사국 (국방부, 방위사업청 등 담당 감사관)
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className={profile_jeong}>
        <Image
          src="https://storage.googleapis.com/profile_image_0709/profile_JeongJinKwon.png"
          alt="법무법인 소울 - 공지연 & 정진권 변호사"
          fill
          quality={100}
          className={profile_jeong_backgroundStyle}
        />
        <div className={profile_jeong_container}>
          <div className={flex}>
            <h2 className={profile_title_text}>
              변호사 <em className={name}>정 진 권</em>
            </h2>
          </div>
          <ul className={ul}>
            <li>
              <span className={li_span}>2023 ~ </span>
              <strong className={li_strong}>
                서울특별시 마을변호사 법률상담관
              </strong>
            </li>
            <li>
              <span className={li_span}>2023 ~ </span>
              <strong className={li_strong}>
                서울특별시 양천구청 전세사기피해 법률상담관
              </strong>
            </li>
            <li>
              <span className={li_span}>2023 ~ </span>
              <strong className={li_strong}>
                서울지방경찰청 혜화경찰서 경미범죄심사위원회 즉결심판위원
              </strong>
            </li>
            <li>
              <span className={li_span}>2022 ~ 2023</span>
              <strong className={li_strong}>
                법무법인 AK (형사, 가사, 행정)
              </strong>
            </li>
            <li>
              <span className={li_span}>2022 ~ 2022</span>
              <strong className={li_strong}>
                서울 서초구청 서초재능TV 생활법률담당 강연 (학교폭력, 조세상속,
                공공주택, 반려동물)
              </strong>
            </li>
            <li>
              <span className={li_span}>2018 ~ 2018</span>
              <strong className={li_strong}>
                감사원 국방감사국 (국방부, 방위사업청 등 담당 감사관)
              </strong>
            </li>
            <li>서울대학교</li>
            <li>경희대학교 법학전문대학원</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
