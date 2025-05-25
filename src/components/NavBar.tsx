import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-neutral-800 h-16 text-white">
      {/* Logo / Home Link */}
      <Link to="/" className="ml-5 text-lg">
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
