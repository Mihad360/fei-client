import { FacebookIcon, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5a10cd] via-[#7505b1] to-[#150a41] text-white py-12 pt-28">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              className="w-32"
              src="https://i.ibb.co.com/PrV36wy/logo-vector-minimalist-design-circle-spin-colorful-concept-minimalismdd-technology-790567-466-remove.png"
              alt=""
            />
            <h3 className="text-3xl font-bold text-white mb-4">ISS CLUB</h3>
            <p className="text-lg text-gray-400 mb-4">
              The Go-down of ISS club is here to showcase the events of ISS Club
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex gap-2 mt-6 md:mt-0">
            <div className="border-r-2 border-r-indigo-600 pr-2">
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="/" className="hover:text-indigo-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-indigo-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-indigo-500">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-indigo-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>+880 1621257820</li>
                <li>ahmedmihad962@gmail.com</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
              <div className="flex gap-5 pt-5">
                <a
                  href="https://www.linkedin.com/in/montasir-mihad/"
                  className="text-gray-400 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/Mihad360"
                  className="text-gray-400 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github/>
                </a>
                <a
                  href="https://www.facebook.com/MontasirMihad360"
                  className="text-gray-400 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Montasir Mihad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
