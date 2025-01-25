import { useEffect } from "react";
import useGallery from "../hooks/useGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Galleries = () => {
  const [gallery] = useGallery();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  }, []);

  // Slice the gallery to get only the last two events
  const recentEvents = gallery.slice(-2).reverse();

  return (
    <div className="pt-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Recent Events Gallery Photos
        </h2>

        {/* Gallery Wrapper */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Map through the last two events */}
          {recentEvents.map((event) => (
            <div
              key={event.title}
              className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800"
            >
              {/* Title and Date */}
              <div className="pb-4">
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                  Event:{" "}
                  <span className="text-fuchsia-600 font-medium">
                    {event.title}
                  </span>
                </h3>
                <p className="text-gray-500 text-lg dark:text-gray-400">
                  Event Date: {event.date}
                </p>
              </div>

              {/* Images */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
                {event.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                  >
                    <img
                      src={image}
                      alt={`${event.title} ${index}`}
                      className="border-2 border-gray-400 rounded-lg w-full object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View Gallery Button */}
      <div className="text-center py-10">
        <Link
          to="/gallery"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          View Gallery
        </Link>
      </div>
    </div>
  );
};

export default Galleries;
