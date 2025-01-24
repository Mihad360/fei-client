const GalleryPics = ({ gal }) => {
  const { title, date, images } = gal;

  return (
    <div className="gallery-section">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(date).toDateString()}
      </p>

      <div className="masonry-grid">
        {images.map((image, index) => (
          <div key={index} className="masonry-item">
            <img
              src={image}
              alt={image.alt || `Image ${index}`}
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPics;
