import {
  Dialog as MuiDialog,
  TextField as MuiTextField,
  styled,
  Snackbar,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Button from "@/components/ui/Button";
import { useState, useRef, useEffect } from "react";
import { root } from "@/styles/root.css";
import { send_email_form } from "@/styles/style.css";
import emailjs from "@emailjs/browser";

const Dialog = styled(MuiDialog)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   overflow: "hidden",
  width: "100%",
  "& .MuiPaper-root": {
    background: root.color.COLOR_08,
    color: root.color.COLOR_01,
    // maxWidth: 400,
    height: 600,
    borderRadius: 4,
    fontSize: 16,
    padding: 32,
    margin: 0,
  },
  "& .MuiDialog-container": {
    background: "transparent",
    color: root.color.WHITE,
    width: "90%",
    padding: 32,
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
  "& .agreement": {
    fontSize: 12,
    margin: 0,
    color: root.color.COLOR_05,
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

const TextField = styled(MuiTextField)(() => ({
  background: "transparent",
  color: root.color.WHITE,
  width: "100%",
  "& input": {
    width: "100%",
  },
  "&:active": {
    border: "none",
  },
}));

const CounselModal = ({ onClose, isOpen, isRender }) => {
  const form = useRef();
  const [isSubmitComplete, setIsSubmitComplete] = useState(0);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    content: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rmtlcpa",
        "template_vmdkb9q",
        form.current,
        "kN_K_gdIppMdJChHt"
      )
      .then((res) => {
        console.log(res);
        setIsSubmitComplete(isSubmitComplete + 1);
        onClose();
        setIsSnackbarOpen(true);
      });
  };

  useEffect(() => {
    if (window && isRender) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "mail_submit", //광고주 측에서 설정하고 싶은 값(default convType)
        convType: "mail_submit_mobile", //etc, join, login
        click: "#mail_submit", //click으로 전환 잡을 경우 css selector 값
      });
    }
  }, [isSubmitComplete]);

  return (
    <>
      <Dialog onClose={onClose} open={isOpen}>
        <div style={{ width: "100%" }}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={send_email_form}
            style={{ width: "100%" }}
          >
            <label>이름</label>
            <TextField
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, name: target.value })
              }
              autoFocus
              type="text"
              name="user_name"
              required
            />

            <label>이메일</label>

            <TextField
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
              type="email"
              name="user_email"
              required
            />
            <label>문의 내용</label>

            <TextField
              multiline
              required
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, content: target.value })
              }
              placeholder="연락처를 함께 기재해 주시기 바랍니다."
              minRows={8}
              type="text"
              name="message"
              style={{ height: 220 }}
            />

            <div className="agreement">
              <p>
                개인정보보호를 위한 이용자 동의 사항 <br />
                <br />
                1. 개인정보의 수집 및 이용 목적 <br /> {"  "}가. 문의에 대한
                답변
                <br />
                {"  "}나. 민원사무 처리 <br />
                {"  "}다. 재화 또는 서비스 제공
                <br />
                {"  "}라. 마케팅 활용 및 광고물 제공 <br />
                <br />
                2. 수집항목 : 이름, 연락처, 이메일 등<br />
                <br /> 3. 개인정보의 보유 및 이용기간 : 이용목적이 달성된 때까지
                보유합니다.
              </p>
            </div>

            <Button
              type="submit"
              id="mail_submit"
              disabled={!userInfo.content || !userInfo.email || !userInfo.name}
            >
              문의하기
            </Button>
          </form>
        </div>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isSnackbarOpen}
        // open={true}
        autoHideDuration={3000}
        style={{ width: "100%" }}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert severity="success" sx={{ width: "90%" }}>
          상담 문의 메일이 성공적으로 전송되었습니다.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CounselModal;
