import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-gray-600 h-16">
      {/* Logo / Home Link */}
      <Link to="/" className="nav-item h-full hover:bg-gray-600">
        Spanish conjugator
      </Link>

      {/* Navigation Links */}
      <div className="flex h-full">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/settings" className="nav-item">
          Settings
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
