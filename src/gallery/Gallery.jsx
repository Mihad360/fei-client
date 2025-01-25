import { useEffect, useState } from "react";
import useGallery from "../hooks/useGallery";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Gallery = () => {
  const [galleryData, setGallery] = useState([]);
  const [gallery] = useGallery();
  const { id } = useParams();

  const breakpointColumns = {
    default: 3, // 3 columns for large screens
    1100: 2, // 2 columns for medium screens
    768: 1, // 1 column for small screens
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get(
          `https://fei-server.vercel.app/gallery/${id}`
        );
        setGallery(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchGallery();
  }, [id]);

  return (
    <div className=" pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          {galleryData.title}
        </h2>
        <p className="text-gray-500 text-lg mb-8">
          Event Date: {galleryData.date}
        </p>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {galleryData?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="border-2 mb-4 border-gray-400 w-full object-cover"
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;
