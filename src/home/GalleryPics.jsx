const GalleryPics = ({ gal }) => {
  const { title, date, images } = gal;

  return (
    <div className="gallery-section px-4 sm:px-6 lg:px-8">
      {/* Title and Date */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">{date}</p>

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="masonry-item">
            <img
              src={image}
              alt={`Image ${index}`}
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPics;
