import {
  successSection,
  success_content_area,
  success_title,
  success_example_item,
  successBackgroundStyle,
  success_subtitle,
} from "@/styles/mobileStyle.css";
import Image from "next/image";
import Lottie from "react-lottie";
import * as animationData from "@/assets/lottie/success.json";
import { useDraggable } from "react-use-draggable-scroll";
import { Dialog as MuiDialog, styled } from "@mui/material";
import { useState, useRef } from "react";
import { root } from "@/styles/root.css";
import Button from "../ui/Button";
import { getBlogUrl } from "@/data/util";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Dialog = styled(MuiDialog)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   overflow: "hidden",
  width: "100%",
  "& .MuiPaper-root": {
    background: root.color.COLOR_08,
    color: root.color.COLOR_01,
    maxWidth: "100%",
    height: "calc(100svh - 400px)",
    borderRadius: 4,
    fontSize: 16,
    padding: 32,
    margin: 0,
  },
  "& .MuiDialog-container": {
    background: "transparent",
    color: root.color.WHITE,
    width: "90%",
  },
  "& .content-title": {
    fontSize: 18,
    letterSpacing: 1.4,
    fontWeight: 500,
    display: "flex",
    justifyContent: "space-between",
    lineHeight: 1.6,
    padding: "0 0 20px",
    borderBottom: `1px solid ${root.color.WHITE}`,
  },
  "& .content": {
    fontSize: 14,
    letterSpacing: 0.4,
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
      style={{
        width: 200,
        height: 320,
      }}
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
          // position: "relative",
          height: 42,
          background: "rgba(7, 3, 0, 0.5)",
          color: "rgba(255, 255, 255, 0.9)",
          border: `1px solid rgba(255, 255, 255, 0.4)`,
          fontWeight: 200,
          zIndex: 40,
          // top: 80,
          // right: 0,
          width: "100%",
        }}
      >
        자세히 보기
      </Button>
    </div>
  );
};

const SuccessExampleDialog = ({ onClose, isOpen, examples, index }) => {
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

  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const imageContainerRef = useRef();
  const { events } = useDraggable(imageContainerRef);

  const handleClick = (item, index) => {
    const itemSelected = isItemSelected(index);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== index)
        : currentSelected.concat(index)
    );
    setSelectedValue(index);
    setIsDialogOpen(true);
  };

  return (
    <section id="success" className={successSection}>
      <div style={{ position: "absolute", right: 80, top: -16 }}>
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>
      <div className={success_content_area}>
        <h2 className={success_title}>변호 승소 & 성공 사례</h2>
        <h3 className={success_subtitle}>
          공정한 변호사들이
          <br />
          최적의 방법으로
          <br />
          당신만을 위해 싸운 결과입니다.
        </h3>
        <div
          ref={imageContainerRef}
          {...events}
          style={{
            width: "100%",
            height: 400,
            marginTop: 20,
            overflowX: "scroll",
          }}
        >
          <div
            style={{
              width: "fit-content",
              display: "flex",
              flexWrap: "nowrap",
              gap: 32,
              padding: "0px",
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
