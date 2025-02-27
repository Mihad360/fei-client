import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobSidebar from "./MobSidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex h-screen bg-gradient-to-r from-indigo-800 via-purple-800 to-fuchsia-900">
        <div className="overflow-y-auto lg:hidden">
          <MobSidebar /> {/* Mobile Sidebar */}
        </div>
        <div className="hidden lg:block overflow-y-auto">
          <Sidebar /> {/* Desktop Sidebar */}
        </div>
        <div className="flex-1 overflow-y-auto relative">
          <div className="relative">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-screen" xmlns="http://www.w3.org/2000/svg">
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
            <div className="relative"><Outlet /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
