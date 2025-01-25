import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LogOut, X, Menu } from "lucide-react";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isAdmin] = useAdmin();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  // Close dropdown and mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const dropdown = document.querySelector(".dropdown-menu");
      const mobileMenu = document.querySelector(".mobile-menu");
      if (
        dropdown &&
        !dropdown.contains(e.target) &&
        mobileMenu &&
        !mobileMenu.contains(e.target)
      ) {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#5a10cd] via-[#8b10cd] to-[#150a41] text-white shadow-lg w-full fixed z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center py-2 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide flex gap-3 items-center">
            <img
              className="w-16 h-16"
              src="https://i.ibb.co.com/PrV36wy/logo-vector-minimalist-design-circle-spin-colorful-concept-minimalismdd-technology-790567-466-remove.png"
              alt=""
            />
            <h1>ISS Club</h1>
          </div>

          {/* Desktop Navigation Links */}
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
            {user && isAdmin ? (
              <NavLink
                to="/dashboard/manage-events"
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline underline-offset-4"
                    : "text-gray-300 hover:text-white transition"
                }
              >
                Dashboard
              </NavLink>
            ) : (
              ""
            )}

            {user && (
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            )}
            {user ? (
              <div className="relative dropdown-menu">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent outside click from closing it immediately
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
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

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center gap-5">
            {user && (
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            )}
            {
              !user ? <Link
              to="/signin"
              className="flex gap-3 items-center py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group bg-fuchsia-600 bg-opacity- hover:bg-fuchsia-800"
            >
              Sign In
            </Link> : ""
            }
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="p-2 rounded-md text-white hover:bg-fuchsia-700"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-menu  md:hidden bg-indigo-900 text-white absolute z-50 overflow-hidden right-0 px-5">
            <div className="flex flex-col items-center py-4 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline underline-offset-4"
                    : "text-gray-300 hover:text-white transition"
                }
                onClick={() => setIsMobileMenuOpen(false)}
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
                onClick={() => setIsMobileMenuOpen(false)}
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
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </NavLink>
              {user && isAdmin ? (
                <NavLink
                  to="/dashboard/manage-events"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white underline underline-offset-4"
                      : "text-gray-300 hover:text-white transition"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              ) : (
                ""
              )}

              {user && (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-lg text-white hover:bg-indigo-600 w-full text-left flex items-center gap-3"
                >
                  <LogOut /> Log out
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
