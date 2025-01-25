import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Calendar,
  GalleryHorizontal,
  Home,
  LayoutDashboard,
  ListChecks,
  LogOut,
  LucideSquareFunction,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

const MobSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // To manage the sidebar visibility
  const sidebarRef = useRef(null); // Reference to the sidebar container
  const location = useLocation(); // Hook to detect route changes
  const { user, logout } = useAuth();
  const navigate = useNavigate()

  const handleLogOut =async () =>{
    await logout();
    navigate("/");
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div>
      {/* Button to toggle the sidebar */}
      <button
        onClick={toggleSidebar}
        className="p-3 bg-fuchsia-500 text-white rounded-md fixed top-4 left-4 z-20"
      >
        <LayoutDashboard/>
      </button>

      {/* Sidebar */}
      {isOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 w-72 h-screen bg-fuchsia-900 z-10 text-white p-6 pt-16"
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>

          <nav className="relative border-t border-fuchsia-400 pt-4">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/dashboard/manage-events"
                  className="flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group hover:bg-fuchsia-500"
                >
                  <ListChecks className="mr-3 text-fuchsia-300" />
                  <span className="font-medium">Manage Events</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-events-gallery"
                  className="flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group hover:bg-fuchsia-500"
                >
                  <Calendar className="mr-3 text-fuchsia-300 group-hover:text-white" />
                  <span className="font-medium">Manage Gallery</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-events"
                  className="flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group hover:bg-fuchsia-500"
                >
                  <Calendar className="mr-3 text-fuchsia-300 group-hover:text-white" />
                  <span className="font-medium">Add Events</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-photos-gallery"
                  className="flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group hover:bg-fuchsia-500"
                >
                  <Calendar className="mr-3 text-fuchsia-300 group-hover:text-white" />
                  <span className="font-medium">Add Photos to Gallery</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all-users"
                  className="flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group hover:bg-fuchsia-500"
                >
                  <Calendar className="mr-3 text-fuchsia-300 group-hover:text-white" />
                  <span className="font-medium">All Users</span>
                </NavLink>
              </li>

              {/* User routes */}
              <li className="border-t border-fuchsia-400 pt-4">
                <NavLink
                  to="/"
                  className="flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group hover:bg-fuchsia-500"
                >
                  <Home className="mr-3 text-fuchsia-300 group-hover:text-white" />
                  <span className="font-medium">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className="flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group hover:bg-fuchsia-500"
                >
                  <LucideSquareFunction className="mr-3 text-fuchsia-300 group-hover:text-white" />
                  <span className="font-medium">Events</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="flex items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group hover:bg-fuchsia-500"
                >
                  <GalleryHorizontal className="mr-3 text-fuchsia-300 group-hover:text-white" />
                  <span className="font-medium">Gallery</span>
                </NavLink>
              </li>
              <li className="border-t border-fuchsia-400 pt-4 pb-20">
                <button
                  onClick={handleLogOut}
                  className="flex gap-3 w-full items-center py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group bg-rose-700 hover:bg-rose-800"
                >
                  <LogOut className="mr-3" />
                  <span className="font-medium">Log Out</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobSidebar;
