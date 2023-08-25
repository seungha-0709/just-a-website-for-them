import { header, header_nav, header_ul } from "@/styles/style.css";
import Image from "next/image";
import { Button as MuiButton, styled } from "@mui/material";
import { root } from "@/styles/root.css";
import { useRouter } from "next/navigation";

const StyledButton = styled(MuiButton)(() => ({
  background: root.color.COLOR_06,
  color: root.color.COLOR_01,
  height: 42,
  width: 120,
  borderRadius: 120,
  fontWeight: 600,
  fontSize: 16,
  transition: "all 0.5s",
  margin: "40px 0",
  "&:hover": {
    background: root.color.COLOR_01,
    color: root.color.WHITE,
  },
  "&:active": {
    background: root.color.COLOR_01,
    color: root.color.WHITE,
  },
}));

const NavButton = styled(MuiButton)(() => ({
  background: "transparent",
  color: root.color.COLOR_09,
  height: 48,
  padding: "10px 24px",
  borderRadius: 0,
  fontWeight: 500,
  fontSize: 18,
  letterSpacing: 1.2,
  transition: "all 0.5s",
  "&:hover": {
    background: root.color.COLOR_01,
    color: root.color.WHITE,
  },
  "&:active": {
    background: root.color.COLOR_01,
    color: root.color.WHITE,
  },
}));

const Header = () => {
  const router = useRouter();

  return (
    <header className={header}>
      <nav className={header_nav}>
        <Image
          src="/image/lawfirm_logo.png"
          width={102}
          height={46}
          alt="법무법인 소울"
        />
        <ul className={header_ul}>
          <li>
            <NavButton
              onClick={() => router.push("/#profile", { scroll: true })}
            >
              변호사 소개
            </NavButton>
          </li>
          <li>
            <NavButton onClick={() => router.push("/#blogs", { scroll: true })}>
              블로그 소개
            </NavButton>
          </li>
          <li>
            <NavButton
              onClick={() => router.push("/#success", { scroll: true })}
            >
              성공 사례
            </NavButton>
          </li>
          <li>
            <NavButton
              onClick={() => router.push("/#reviews", { scroll: true })}
            >
              고객 후기
            </NavButton>
          </li>
        </ul>
        <div>
          <StyledButton>블로그</StyledButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
