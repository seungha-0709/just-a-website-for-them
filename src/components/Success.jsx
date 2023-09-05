import {
  main_title_main_text,
  successSection,
  success_backgroundStyle,
  success_section,
  main_title_area,
  success_content_area,
  success_title,
  success_example_container,
  success_example_item,
  successBackgroundStyle,
  success_example_item_image,
  success_subtitle,
} from "@/styles/style.css";
import Image from "next/image";
import { mainBackgroundStyle } from "@/styles/style.css";
import { Dialog as MuiDialog, styled } from "@mui/material";
import { useState } from "react";
import { root } from "@/styles/root.css";

const Dialog = styled(MuiDialog)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  "& .MuiPaper-root": {
    background: root.color.COLOR_02,
    color: root.color.WHITE,
    maxWidth: "100%",
    height: "fit-contents",
    borderRadius: 4,
    fontSize: 16,
    padding: 32,
    margin: 0,
  },
  "& .MuiDialog-container": {
    background: "transparent",
    color: root.color.WHITE,
    width: 900,
  },
  "& .content-title": {
    fontSize: 18,
    letterSpacing: 1.4,
    fontWeight: 500,
    lineHeight: 1.6,
    padding: "0 0 20px",
    borderBottom: `1px solid ${root.color.WHITE}`,
  },
  "& .content": {
    fontSize: 14,
    letterSpacing: 1.4,
    lineHeight: 1.6,
    "& h2": {
      fontWeight: 400,
      fontSize: 18,
      marginTop: 28,
    },
    "& p": {
      fontWeight: 200,
      fontSize: 14,
      marginBottom: 20,
    },
  },
}));

const SuccessExampleDialog = ({ onClose, isOpen, examples, index }) => {
  console.log(index);
  console.log(examples);
  return (
    <Dialog onClose={onClose} open={isOpen}>
      {Number(index) >= 0 && (
        <>
          <div className="content-title">{examples[index].title}</div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: examples[index].html }}
          ></div>
        </>
      )}
    </Dialog>
  );
};

const Success = ({ examples }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleItemClick = (index) => {
    setSelectedValue(index);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  console.log(examples);

  return (
    <section id="success" className={successSection}>
      <Image
        src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/bg_2.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        loading="lazy"
        quality={100}
        className={successBackgroundStyle}
      />
      <div className={success_content_area}>
        <h2 className={success_title}>변호 승소 & 성공 사례</h2>
        <h3 className={success_subtitle}>
          공정한 변호사들이
          <br />
          최적의 방법으로 당신만을 위해 싸운 결과입니다.
        </h3>
        <div className={success_example_container}>
          {examples.map((item, index) => {
            return (
              <button
                className={success_example_item}
                onClick={() => handleItemClick(index)}
                key={index}
              >
                <Image src={item.feature_image} alt={item.title} fill />
              </button>
            );
          })}
        </div>
      </div>
      <SuccessExampleDialog
        index={selectedValue}
        examples={examples}
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
      />
    </section>
  );
};

export default Success;
