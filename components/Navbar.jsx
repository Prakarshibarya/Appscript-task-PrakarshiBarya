// components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="mm-header">
      <div className="container">
        {/* Row 1: menu • LOGO (center) • icons */}
        <div className="mm-header-row">
          <button className="mm-icon-btn" aria-label="Open menu">☰</button>

          <div className="mm-logo">LOGO</div>

          <div className="mm-right-icons">
            <button className="mm-icon-btn" aria-label="Search">🔍</button>
            <button className="mm-icon-btn" aria-label="Wishlist">♡</button>
            <button className="mm-icon-btn" aria-label="Account">👤</button>
            <button className="mm-icon-btn" aria-label="Bag">👜</button>
            <button className="mm-lang" aria-label="Language">ENG ▾</button>
          </div>
        </div>

        {/* Row 2: centered nav */}
        <nav className="mm-topnav" aria-label="Main">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </div>

      <div className="mm-divider" />
    </header>
  );
}
