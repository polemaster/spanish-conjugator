import { Link } from "react-router-dom";

export function NavBar() {
  return (
    // needed to add z-50 here because ▸ symbol was overlapping it
    <nav
      className="fixed top-0 left-0 w-full flex justify-between items-center
      bg-neutral-800 h-16 border-b border-neutral-400 z-50"
    >
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
