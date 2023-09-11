import {
  Dialog as MuiDialog,
  TextField as MuiTextField,
  styled,
} from "@mui/material";
import { addMember } from "../../../lib/admin";
import Button from "./Button";
import { useState, useRef } from "react";
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rmtlcpa",
        "template_8y3h9qh",
        form.current,
        "kN_K_gdIppMdJChHt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // const [form, setForm] = useState({
  //   user_email: "",
  //   user_name: "",
  //   message: "",
  // });

  //   const handleSubmit = () => {
  //     addMember(form.email, form.name, form.content);
  //   };

  console.log(form.current);

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <div>
        {/* <TextField
          value={form.email}
          onChange={({ target }) => setForm({ ...form, email: target.value })}
        ></TextField>
        <TextField
          value={form.name}
          onChange={({ target }) => setForm({ ...form, name: target.value })}
        ></TextField>
        <TextField
          value={form.content}
          onChange={({ target }) => setForm({ ...form, content: target.value })}
        ></TextField>
        <Button onClick={handleSubmit}>접수</Button> */}
        <form ref={form} onSubmit={sendEmail} className={send_email_form}>
          <label>이름</label>
          <TextField autoFocus type="text" name="user_name" />
          {/* <input type="text" name="user_name" /> */}
          <label>이메일</label>
          {/* <input type="email" name="user_email" /> */}
          <TextField type="email" name="user_email" />
          <label>문의 내용</label>
          {/* <textarea name="message" style={{ height: 300 }} /> */}
          <TextField
            multiline
            minRows={10}
            type="text"
            name="message"
            style={{ height: 300 }}
          />
          <Button type="submit">문의하기</Button>
          {/* <input type="submit" value="문의하기" /> */}
        </form>
      </div>
    </Dialog>
  );
};

export default CounselModal;
