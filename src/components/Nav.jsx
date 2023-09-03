import { globalNav, globalNav_button } from "@/styles/style.css";
import { root } from "@/styles/root.css";

const Nav = ({ slickGoTo }) => {
  console.log(slickGoTo);
  return (
    <nav className={globalNav}>
      <button
        style={{ background: root.color.COLOR_01 }}
        className={globalNav_button}
        onClick={() => slickGoTo(0)}
      >
        1
      </button>

      <button className={globalNav_button} onClick={() => slickGoTo(1)}>
        2
      </button>

      <button className={globalNav_button} onClick={() => slickGoTo(3)}>
        3
      </button>

      <button className={globalNav_button} onClick={() => slickGoTo(4)}>
        4
      </button>
    </nav>
  );
};

export default Nav;
