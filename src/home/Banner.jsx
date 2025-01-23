const Banner = () => {
  return (
    <div className="pt-16">
      <div className="relative h-[90vh] text-center flex items-center justify-center bg-gradient-to-br from-[#5a10cd] via-[#8b10cd] to-[#cd5a10]">
        <div className="max-w-[1400px] mx-auto">
          {/* Decorative Backdrops */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3710cd]/50 via-transparent to-[#cd1010]/50"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#cd5a10] rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#10cd5a] rounded-full blur-2xl opacity-30"></div>

          {/* Content */}
          <div className="relative z-10 text-white">
            <div className="flex items-center">
              <div>
                <h1 className="text-5xl font-bold tracking-wide">
                  Welcome to The <br />{" "}
                  <span>International Students Society</span>
                </h1>
                <p className="mt-4 font-normal text-lg tracking-wide">
                  This banner combines complementary colors!
                </p>
              </div>
              <div>
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
                  className="rounded-tl-full w-[700px]"
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
