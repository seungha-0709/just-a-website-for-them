import {
  Dialog as MuiDialog,
  TextField as MuiTextField,
  styled,
} from "@mui/material";
import { addMember } from "../../../lib/admin";
import Button from "./Button";
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

const TextField = styled(MuiTextField)(() => ({
  background: "transparent",
}));

const CounselModal = ({ onClose, isOpen }) => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    content: "",
  });

  const handleSubmit = () => {
    addMember(form.email, form.name, form.content);
  };

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <div>
        {/* <form data-members-form onSubmit={handleSubmit}>
          <input data-members-email type="email" required="true" />
          <input data-members-label type="label" required="true" />
          <input data-members-name type="name" required="true" /> */}
        <TextField
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
        <Button onClick={handleSubmit}>접수</Button>
        {/* </form> */}
      </div>
    </Dialog>
  );
};

export default CounselModal;
