import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-neutral-800 h-16">
      {/* Logo / Home Link */}
      <Link to="/" className="mx-5 text-lg text-center">
        Spanish conjugator
      </Link>

      {/* Navigation Links */}
      <div className="flex h-full">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/theory" className="nav-item">
          Theory
        </Link>
        <Link to="/settings" className="nav-item">
          Settings
        </Link>
      </div>
    </nav>
  );
}
