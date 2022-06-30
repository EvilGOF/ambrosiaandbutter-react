const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <h2>
          Ambrosia and <span>Butter</span>
        </h2>
      </div>
      <ul className="menu">
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Buy some!</a>
        </li>
        <li>
          <a href="#">Recipes</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
