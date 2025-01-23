import useGallery from "../hooks/useGallery";
import Masonry from "react-masonry-css";

const Gallery = () => {
  const [gallery] = useGallery();

  // Sort gallery by date (newest first)
//   const sortedGallery = [...gallery].sort(
//     (a, b) => new Date(b.date) - new Date(a.date)
//   );

  // Define Masonry breakpoint columns
  const breakpointColumns = {
    default: 3, // 3 columns for large screens
    1100: 2, // 2 columns for medium screens
    768: 1, // 1 column for small screens
  };

  return (
    <div className=" pt-28 ">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Events Gallery Photos
        </h2>

        {/* Loop through sorted events */}
        {[...gallery].reverse().map((event) => (
          <div key={event.title} className="pb-12">
            {/* Title and Date */}
            <div className="pb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-700">
                Event: <span className="text-fuchsia-600 font-medium">{event.title}</span>
              </h3>
              <p className="text-gray-500 text-lg">
                Event Date: {event.date}
              </p>
            </div>

            <Masonry
              breakpointCols={breakpointColumns}
              className="flex gap-4"
              columnClassName="masonry-column"
            >
              {event.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={event.title}
                  className="border-2 mb-4 border-gray-400 w-full object-cover"
                />
              ))}
            </Masonry>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
