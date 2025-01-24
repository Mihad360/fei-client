const GallerySearch = ({handleSearch}) => {
  return (
    <div className="">
      <form onSubmit={handleSearch} className="mx-auto flex justify-center space-x-2 pt-4">
        <input
          type="text"
          name="search"
          placeholder="Search for galleries..."
          className="w-52 md:w-80 lg:w-[600px] p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button type="submit" className="p-2 lg:px-6 lg:py-3 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Search
        </button>
      </form>
    </div>
  );
};

export default GallerySearch;
