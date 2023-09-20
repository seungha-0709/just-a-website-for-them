import {
  successSection,
  success_content_area,
  success_title,
  success_example_item,
  successBackgroundStyle,
  success_subtitle,
} from "@/styles/style.css";
import Image from "next/image";
import { Dialog as MuiDialog, styled } from "@mui/material";
import { useState, useRef } from "react";
import { root } from "@/styles/root.css";
import Button from "@/components/ui/Button";
import CloseIcon from "@mui/icons-material/Close";
import { JEONG_BLOG_URL, KONG_BLOG_URL } from "@/data/contants";
import { useDraggable } from "react-use-draggable-scroll";
import { getBlogUrl } from "@/data/util";

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
    maxHeight: 500,
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 0 20px",
    width: "100%",
    borderBottom: `1px solid ${root.color.WHITE}`,
    "& > div": {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
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

const SuccessItem = ({ onClick, selected, itemId, item }) => {
  return (
    <div
      onClick={() => window.open(getBlogUrl(item))}
      className={success_example_item}
    >
      <Image
        src={item.feature_image}
        alt={item.title}
        fill
        style={{ opacity: 0.5 }}
      />
      <div>
        <p
          style={{
            fontWeight: 600,
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.7)",
            position: "relative",
            zIndex: 40,
          }}
        >
          {item.title}
        </p>
        <div
          className="success_card_content"
          dangerouslySetInnerHTML={{ __html: item.html }}
        ></div>
      </div>
      <Button
        style={{
          position: "absolute",
          left: "50%",
          width: "90%",
          transform: "translateX(-50%)",
          bottom: 20,
          height: 42,
          background: "rgba(7, 3, 0, 0.5)",
          color: "rgba(255, 255, 255, 0.9)",
          border: `1px solid rgba(255, 255, 255, 0.4)`,
          fontWeight: 200,
          zIndex: 40,
          bottom: 30,
        }}
      >
        자세히 보기
      </Button>
    </div>
  );
};

const Success = ({ examples }) => {
  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const imageContainerRef = useRef();
  const { events } = useDraggable(imageContainerRef);

  const handleClick = (item, index) => {
    const itemSelected = isItemSelected(index);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== index)
        : currentSelected.concat(index)
    );
  };

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
        <div
          ref={imageContainerRef}
          {...events}
          style={{
            width: "70%",
            height: 400,
            marginTop: 40,
            overflowX: "scroll",
          }}
        >
          <div
            style={{
              width: "fit-content",
              display: "flex",
              flexWrap: "nowrap",
              gap: 32,
              padding: "0 32px",
            }}
          >
            {examples.map((item, index) => {
              return (
                <SuccessItem
                  onClick={(e) => {
                    handleClick(item, index);
                  }}
                  key={index}
                  itemId={index}
                  item={item}
                  selected={isItemSelected(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <SuccessExampleDialog
        index={selectedValue}
        examples={examples}
        url={examples[selectedValue].url.split("/").slice(-2)[0]}
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
      /> */}
    </section>
  );
};

export default Success;
