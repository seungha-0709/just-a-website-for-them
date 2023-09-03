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
} from "@/styles/mobileStyle.css.ts";

import Image from "next/image";

const Profile = () => {
  return (
    <section id="profile" className={profileSection}>
      <div className={profile_kong}>
        <h2 className={profile_title_text}>
          변호사 <em className={name}>공 지 연</em>
        </h2>
        <ul className={ul}>
          <li>
            <span className={li_span}>학력</span>
            <strong className={li_strong}>경희대학교 자율전공학과</strong>
          </li>
          <li>
            <strong className={li_strong}>경희대학교 법학전문대학원</strong>
          </li>
          <li>
            <span style={{ marginTop: 28 }} className={li_span}>
              경력
            </span>
            <strong className={li_strong}>前) 국방부 실무 수습</strong>
          </li>
          <li>
            <strong className={li_strong}>前) 법무법인 해랑</strong>
          </li>
          <li>
            <strong className={li_strong}>
              前) 법무법인 AK 교통사고, 손해배상 전담
            </strong>
          </li>
          <li>
            <strong className={li_strong}>
              現) 법무법인 소울 파트너 변호사
            </strong>
          </li>
          <li>
            <strong className={li_strong}>
              現) 서울 관악경찰서 선도심사위원
            </strong>
          </li>
          <li>
            <strong className={li_strong}>
              EBS &apos;직업탐구, 별별입니다&apos; 출연
            </strong>
          </li>
        </ul>
      </div>
      <div style={{ position: "relative", display: "flex" }}>
        <div
          style={{
            width: "50%",
            height: 200,
            position: "relative",
          }}
        >
          <Image
            src="https://storage.googleapis.com/profile_image_0709/profile_kongJiYeon.png"
            alt="법무법인 소울 - 공지연 변호사"
            fill
            className={profile_kong_backgroundStyle}
          />
        </div>
        <div style={{ width: "50%", height: 200, position: "relative" }}>
          <Image
            src="https://storage.googleapis.com/profile_image_0709/profile_JeongJinKwon.png"
            alt="법무법인 소울 - 공지연 & 정진권 변호사"
            fill
            quality={100}
            className={profile_jeong_backgroundStyle}
          />
        </div>
      </div>
      <div className={profile_jeong}>
        <h2 className={profile_title_text}>
          변호사 <em className={name}>정 진 권</em>
        </h2>
        <ul className={ul}>
          <li>
            <span className={li_span}>학력</span>
            <strong className={li_strong}>서울대학교 사회학과</strong>
          </li>
          <li>
            <strong className={li_strong}>경희대학교 법학전문대학원</strong>
          </li>
          <li>
            <span style={{ marginTop: 28 }} className={li_span}>
              경력
            </span>
            <strong className={li_strong}>
              前) 감사원 국방감사국
              {"  "}(국방부, 방위사업청) 감사관
            </strong>
          </li>
          <li>
            <strong className={li_strong}>前) 울산지검 실무 수습</strong>
          </li>
          <li>
            <strong className={li_strong}>
              前) 법무법인 최선, 법무법인 AK
            </strong>
          </li>
          <li>
            <strong className={li_strong}>
              前) 법률사무소 위드윤 파트너 변호사
            </strong>
          </li>
          <li>
            <strong className={li_strong}>
              現) 법무법인 소울 파트너 변호사
            </strong>
          </li>
          <li>
            <strong className={li_strong}>
              現) 서울 혜화경찰서 즉결심판위원
            </strong>
          </li>
          <li>
            <strong className={li_strong}>
              現) 서울 양천구청 전세사기피해 법률상담관
            </strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
