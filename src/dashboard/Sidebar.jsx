import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Calendar,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  Home,
  ListChecks,
  LogOut,
  LucideSquareFunction,
  PhoneOutgoing,
  User,
} from "lucide-react";
import useAuth from "../hooks/useAuth";
import { SiEventbrite } from "react-icons/si";

const Sidebar = () => {

  const { user, logout } = useAuth();
  const navigate = useNavigate()

  const handleLogOut =async () =>{
    await logout();
    navigate("/");
  }

  return (
    <div className="w-72 h-screen z-10 text-white p-6 relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      <Link
        to="/"
        className="text-2xl font-bold mb-3 relative flex items-center gap-3"
      >
        <img
          className="w-16"
          src="https://i.ibb.co.com/PrV36wy/logo-vector-minimalist-design-circle-spin-colorful-concept-minimalismdd-technology-790567-466-remove.png"
          alt=""
        />
        Dashboard
      </Link>

      <nav className="relative border-t border-fuchsia-400 pt-4">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard/manage-events"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group ${
                  isActive
                    ? "bg-fuchsia-500 text-white"
                    : "bg-white bg-opacity-10 hover:bg-opacity-20"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <ListChecks
                    className={`mr-3 ${
                      isActive
                        ? "text-white"
                        : "text-fuchsia-300 group-hover:text-white"
                    } transition-colors`}
                  />
                  <span className="font-medium">Manage Events</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manage-events-gallery"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group ${
                  isActive
                    ? "bg-fuchsia-500 text-white"
                    : "bg-white bg-opacity-10 hover:bg-opacity-20"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <GalleryHorizontalEnd
                    className={`mr-3 ${
                      isActive
                        ? "text-white"
                        : "text-fuchsia-300 group-hover:text-white"
                    } transition-colors`}
                  />
                  <span className="font-medium">Manage Gallery</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-events"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group ${
                  isActive
                    ? "bg-fuchsia-500 text-white"
                    : "bg-white bg-opacity-10 hover:bg-opacity-20"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <SiEventbrite
                    className={`mr-3 ${
                      isActive
                        ? "text-white"
                        : "text-fuchsia-300 group-hover:text-white"
                    } transition-colors`}
                  />
                  <span className="font-medium">Add Events</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-photos-gallery"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group ${
                  isActive
                    ? "bg-fuchsia-500 text-white"
                    : "bg-white bg-opacity-10 hover:bg-opacity-20"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <PhoneOutgoing
                    className={`mr-3 ${
                      isActive
                        ? "text-white"
                        : "text-fuchsia-300 group-hover:text-white"
                    } transition-colors`}
                  />
                  <span className="font-medium">Add Photos to Gallery</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-users"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group ${
                  isActive
                    ? "bg-fuchsia-500 text-white"
                    : "bg-white bg-opacity-10 hover:bg-opacity-20"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <User
                    className={`mr-3 ${
                      isActive
                        ? "text-white"
                        : "text-fuchsia-300 group-hover:text-white"
                    } transition-colors`}
                  />
                  <span className="font-medium">All Users</span>
                </>
              )}
            </NavLink>
          </li>

          {/* User routes  */}

          <li className="border-t border-fuchsia-400 pt-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group ${
                  isActive
                    ? "bg-fuchsia-500 text-white"
                    : "bg-white bg-opacity-10 hover:bg-opacity-20"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Home
                    className={`mr-3 ${
                      isActive
                        ? "text-white"
                        : "text-fuchsia-300 group-hover:text-white"
                    } transition-colors`}
                  />
                  <span className="font-medium">Home</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group ${
                  isActive
                    ? "bg-fuchsia-500 text-white"
                    : "bg-white bg-opacity-10 hover:bg-opacity-20"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <LucideSquareFunction
                    className={`mr-3 ${
                      isActive
                        ? "text-white"
                        : "text-fuchsia-300 group-hover:text-white"
                    } transition-colors`}
                  />
                  <span className="font-medium">Events</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group ${
                  isActive
                    ? "bg-fuchsia-500 text-white"
                    : "bg-white bg-opacity-10 hover:bg-opacity-20"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <GalleryHorizontal
                    className={`mr-3 ${
                      isActive
                        ? "text-white"
                        : "text-fuchsia-300 group-hover:text-white"
                    } transition-colors`}
                  />
                  <span className="font-medium">Gallery</span>
                </>
              )}
            </NavLink>
          </li>
          <li className="border-t border-fuchsia-400 pt-4 pb-20">
            <button onClick={handleLogOut} className="flex gap-3 w-full items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group bg-rose-700 bg-opacity- hover:bg-rose-800">
              <>
                <LogOut />
                <span className="font-medium">Log Out</span>
              </>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
