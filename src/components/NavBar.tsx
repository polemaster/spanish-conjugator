import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        {/* Logo / Home Link */}
        <div>
          <Link
            to="/"
            className="text-white text-xl font-bold hover:text-gray-400"
          >
            Spanish conjugator
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            to="/home"
            className="text-white text-lg hover:text-gray-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/settings"
            className="text-white text-lg hover:text-gray-400 transition duration-200"
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
