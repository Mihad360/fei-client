import { useEffect } from "react";
import useGallery from "../hooks/useGallery";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router-dom";

const Galleries = () => {
  const [gallery] = useGallery();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      once: true, // Animation runs only once
    });
  }, []);

  // Slice the gallery to get only the last two events
  const recentEvents = gallery.slice(-2).reverse();

  return (
    <div className="pt-28">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Recent Events Gallery Photos
        </h2>

        <div className="flex flex-wrap gap-8">
          {/* Map through the last two events */}
          {recentEvents.map((event) => (
            <div
              key={event.title}
              className="w-full lg:w-[48%] border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              {/* Title and Date */}
              <div className="pb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-gray-700">
                  Event:{" "}
                  <span className="text-fuchsia-600 font-medium">
                    {event.title}
                  </span>
                </h3>
                <p className="text-gray-500 text-lg">
                  Event Date: {event.date}
                </p>
              </div>

              {/* Images */}
              <div className="flex flex-wrap gap-4">
                {event.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[calc(50%-8px)] sm:w-[calc(33.333%-8px)]"
                    data-aos="fade-up"
                  >
                    <img
                      src={image}
                      alt={event.title}
                      className="border-2 border-gray-400 rounded-lg w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center py-10">
        <Link to='/gallery' className=" bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none">
          View Gallery
        </Link>
      </div>
    </div>
  );
};

export default Galleries;
