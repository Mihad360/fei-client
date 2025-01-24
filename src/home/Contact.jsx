const Contact = () => {
  const backgroundImage = "https://i.ibb.co/TqcPk12/ISS-mngmt-camppic-2.jpg";

  return (
    <div
      className="relative bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-between text-white px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="text-center pt-5 lg:pt-0 lg:text-left lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wide mb-4">
            Reach Us Here
          </h2>
          <p className="text-lg">Stay Updated With ISS Club</p>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-lg bg-white my-5 bg-opacity-10 p-8 rounded-lg shadow-lg">
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
