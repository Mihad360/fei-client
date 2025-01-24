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
      <div className="relative z-10 min-h-screen flex flex-row  justify-between text-white px-4 max-w-[1400px] mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8 pt-8 tracking-wide">Reach Us Here
        <p className="pt-3">Stay Updated With ISS Club</p>
        </h2>
        

        {/* Contact Form */}
        <form className="w-full max-w-lg bg-opacity-80 p-8 rounded-lg shadow-lg">
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
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
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
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
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
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              rows="4"
            ></textarea>
          </div>
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
