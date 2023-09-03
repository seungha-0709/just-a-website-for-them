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
    width: "100%",
    height: 600,
    borderRadius: 4,
    fontSize: 16,
    padding: 32,
  },
  "& .MuiDialog-contaier": {
    background: "transparent",
    color: root.color.WHITE,
    width: 500,
    maxWidth: "100%",
  },
}));

const SuccessExampleDialog = ({ onClose, isOpen, examples, index }) => {
  console.log(index);
  console.log(examples);
  return (
    <Dialog onClose={onClose} open={isOpen}>
      {Number(index) >= 0 && (
        <div dangerouslySetInnerHTML={{ __html: examples[index].html }}></div>
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
        src="https://storage.googleapis.com/profile_image_0709/bg_2.png"
        alt="법무법인 소울 - 공지연 & 정진권 변호사"
        fill
        quality={100}
        className={successBackgroundStyle}
      />
      <div className={success_content_area}>
        <h2 className={success_title}>성공 사례</h2>
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
