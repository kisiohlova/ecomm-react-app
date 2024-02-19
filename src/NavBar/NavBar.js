import "./navbar.css";

export function NavBar() {
  return (
    <nav class="navbar">
      <img src="/logo512.png" alt="logo" />
      <ul class="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Catalog</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
    </nav>
  );
}
