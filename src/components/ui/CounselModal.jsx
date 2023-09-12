import {
  Dialog as MuiDialog,
  TextField as MuiTextField,
  styled,
  Snackbar,
  Alert,
} from "@mui/material";
import { addMember } from "../../../lib/admin";
import Button from "./Button";
import { useState, useRef, useEffect } from "react";
import { root } from "@/styles/root.css";
import { send_email_form } from "@/styles/style.css";
import emailjs from "@emailjs/browser";

const Dialog = styled(MuiDialog)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  "& .MuiPaper-root": {
    background: root.color.COLOR_09,
    color: root.color.COLOR_01,
    maxWidth: "100%",
    height: "fit-contents",
    borderRadius: 4,
    fontSize: 16,
    padding: 32,
    margin: 0,
  },
  "& .MuiDialog-container": {
    background: "transparent",
    color: root.color.COLOR_01,
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

const TextField = styled(MuiTextField)(() => ({
  background: "transparent",
  color: root.color.WHITE,
  "&:active": {
    border: "none",
  },
}));

const CounselModal = ({ onClose, isOpen }) => {
  const form = useRef();
  const [isSubmitComplete, setIsSubmitComplete] = useState(0);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
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
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "mail_submit", //광고주 측에서 설정하고 싶은 값(default convType)
        convType: "mail_submit_pc", //etc, join, login
        click: "#mail_submit", //click으로 전환 잡을 경우 css selector 값
      });
    }
  }, [isSubmitComplete]);

  return (
    <>
      <Dialog onClose={onClose} open={isOpen}>
        <div>
          <form ref={form} onSubmit={sendEmail} className={send_email_form}>
            <label>이름</label>
            <TextField
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, name: target.value })
              }
              autoFocus
              type="text"
              name="user_name"
            />

            <label>이메일</label>

            <TextField
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
              type="email"
              name="user_email"
            />
            <label>문의 내용</label>

            <TextField
              multiline
              minRows={10}
              type="text"
              name="message"
              style={{ height: 300 }}
            />
            <Button type="submit" id="mail_submit">
              문의하기
            </Button>
            {/* <input type="submit" value="문의하기" /> */}
          </form>
        </div>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isSnackbarOpen}
        autoHideDuration={3000}
        style={{ width: 800 }}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          상담 문의 메일이 성공적으로 전송되었습니다.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CounselModal;
