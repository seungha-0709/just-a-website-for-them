import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const Button = styled(MuiButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 500,
  fontFamily: "Pretendard",
  borderRadius: 24,
  padding: "12px 48px",
  height: 48,
  border: "none",
  lineHeight: 1.5,
  color: "#1C1300",
  backgroundColor: "#F0B030",
  "&:hover": {
    backgroundColor: "#D49B2A",
  },
});

export default Button;
