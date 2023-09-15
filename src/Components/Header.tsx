import "./Header.css";

function Header() {
  const title = "Fullmetal Alchemist";
  const navItems = ["about us", "info", "support us"];

  return (
    <header>
      <h1>{title}</h1>
      <nav>
        {navItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </nav>
    </header>
  );
}

export default Header;
