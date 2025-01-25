import { ArrowBigRight, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Banner = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const exploreHere = () => {
    if (user && user?.email) {
      navigate("/events");
    } else {
      Swal.fire({
        title: "You are not logged in!!",
        text: "Please Sign In first to explore ISS Club",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sign In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin", { from: location });
        }
      });
    }
  };

  return (
    <div className="pt-16">
      <div className="relative h-[90vh] text-center flex items-center justify-center bg-gradient-to-br from-[#5a10cd] via-[#8b10cd] to-[#cd5a10]">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Decorative Backdrops */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3710cd]/50 via-transparent to-[#cd1010]/50"></div>
          <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-[#cd5a10] rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 md:w-72 md:h-72 bg-[#10cd5a] rounded-full blur-2xl opacity-30"></div>

          {/* Content */}
          <div className="relative z-30 text-white">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="pattern"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="20" cy="20" r="3" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
              </div>
              <div className="z-30 text-center md:text-left md:w-1/2">
                <h1 className="text-2xl lg:text-5xl font-bold tracking-wide uppercase">
                  Welcome to The <br />
                  <p className="md:pt-2">International Students Society</p>
                </h1>
                <p className="pt-4 pb-4 font-normal text-sm md:text-lg tracking-wide">
                  The Go-down of ISS club is here to showcase the events of ISS
                  Club
                </p>
                <button
                  onClick={exploreHere}
                  className="flex gap-3 shadow-lg items-center mx-auto md:mx-0 py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg group w-full md:w-72 bg-gradient-to-r from-[#5a10cd] via-[#8b10cd] to-[#150a41] text-white"
                >
                  <Eye /> Explore The ISS Club <ArrowBigRight />
                </button>
              </div>
              <div className="relative mt-10 md:mt-0 md:w-1/2">
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="pattern"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="20" cy="20" r="3" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pattern)" />
                  </svg>
                </div>
                <img
                  className="lg:rounded-tl-full relative z-30 w-full max-w-[800px] mx-auto"
                  src="https://i.ibb.co.com/wKMWRJd/DB2-A9118-1024x575.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
