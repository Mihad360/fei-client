import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
    // window.location.reload();
  };

  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#5a10cd] via-[#8b10cd] to-[#150a41] text-white shadow-lg w-full fixed z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center py-2 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide flex gap-3 items-center ">
            <img
              className="w-16 h-16"
              src="https://i.ibb.co.com/PrV36wy/logo-vector-minimalist-design-circle-spin-colorful-concept-minimalismdd-technology-790567-466-remove.png"
              alt=""
            />
            <h1>ISS Club</h1>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline underline-offset-4"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline underline-offset-4"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline underline-offset-4"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/games"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline underline-offset-4"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              Games
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline underline-offset-4"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              Dashboard
            </NavLink>
            {user ? (
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            ) : ""}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg bg-fuchsia-600 hover:bg-fuchsia-800"
                >
                  {user.displayName || "User"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-indigo-900 rounded-md overflow-hidden shadow-xl z-10">
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-lg text-white hover:bg-indigo-600 w-full text-left flex items-center gap-3"
                    >
                      <LogOut /> Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signin"
                className="flex gap-3 items-center py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group bg-fuchsia-600 bg-opacity- hover:bg-fuchsia-800"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
