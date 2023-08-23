const Nav = ({ slickGoTo }) => {
  console.log(slickGoTo);
  return (
    <nav style={{ position: "fixed", top: 60, zIndex: 100 }}>
      <ul>
        <li>
          <button onClick={() => slickGoTo(0)}>1</button>
        </li>
        <li>
          <button onClick={() => slickGoTo(1)}>2</button>
        </li>
        <li>
          <button onClick={() => slickGoTo(3)}>3</button>
        </li>
        <li>
          <button onClick={() => slickGoTo(4)}>4</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
