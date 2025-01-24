
const AboutUs = () => {
  return (
    <div className="pt-12 pb-20 px-6 border-t-2 max-w-[1400px] border-fuchsia-700 mx-auto">
      {/* Container */}
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Logo Section */}
        <div>
          <img
            src="https://i.ibb.co.com/PrV36wy/logo-vector-minimalist-design-circle-spin-colorful-concept-minimalismdd-technology-790567-466-remove.png"
            alt="ISS Logo"
            className="mx-auto w-32 h-32 rounded-full shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800">
          About the{" "}
          <span className="text-indigo-600">
            International Student Society (ISS)
          </span>
        </h1>

        {/* About Text */}
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Welcome to the International Student Society (ISS), where we celebrate
          diversity, foster inclusion, and create a vibrant community for
          students from around the world. Our mission is to build meaningful
          connections, offer support, and ensure every student feels at home, no
          matter where they are from.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-indigo-600">
            <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-3">
              To unite students across all cultures and create opportunities for
              academic, cultural, and personal growth.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-green-600">
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-3">
              Empower students to embrace cultural diversity while fostering an
              environment of inclusion and mutual respect.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-yellow-500">
            <h2 className="text-xl font-semibold text-gray-800">
              What We Offer
            </h2>
            <p className="text-gray-600 mt-3">
              Engaging events, networking opportunities, and a platform to
              showcase and learn from the world’s cultures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
