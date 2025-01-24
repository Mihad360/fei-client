import { Link } from "react-router-dom";
import useGallery from "../hooks/useGallery";
import GallerySearch from "./GallerySearch";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loading from "../components/loader/Loading";

const GalleryCards = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [gallery, refetch] = useGallery();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      axiosPublic.get(`/gallery-search?title=${search}`).then((res) => {
        console.log(res.data);
        setData(res.data.result);
        setLoading(false);
      });
    };
    fetchProducts();
  }, [axiosPublic, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  if (loading) {
    return (
      <div className="text-center py-72">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto pt-28 pb-20 px-5 lg:px-0">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center">
        <GallerySearch handleSearch={handleSearch}></GallerySearch>
        <h1 className="text-2xl lg:text-4xl font-bold text-center text-purple-700">
          All Events Gallery
        </h1>
      </div>
      <div className="flex justify-center pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data && data.length > 0 ? (
            [...data].reverse().map((item) => (
              <div key={item._id} className="border p-4 bg-gray-300">
                <h3 className="text-xl font-semibold pb-4">{item.title}</h3>
                <p className="text-sm text-indigo-600 pb-4">{item.date}</p>
                <Link
                  to={`/gallery/${item._id}`}
                  className="w-full py-2 px-4 bg-fuchsia-500 text-white font-semibold rounded-lg shadow-md hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                >
                  View Gallery
                </Link>
              </div>
            ))
          ) : (
            <p>No galleries available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
