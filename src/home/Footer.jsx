const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 pt-28">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold text-indigo-600 mb-4">
              Montasir Mihad
            </h3>
            <p className="text-lg text-gray-400 mb-4">
              Full Stack Developer | React.js, Node.js, MongoDB, Next.js
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                className="text-gray-400 hover:text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex space-x-12 mt-6 md:mt-0">
            <div>
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
                <li>+880 123 456 789</li>
                <li>hello@montasirmihad.com</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
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
