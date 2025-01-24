import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useGallery from "../hooks/useGallery";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageGallery = () => {
  const [gallery, refetch] = useGallery();
  const axiosSecure = useAxiosSecure()

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/gallery/${id}`).then((res) => {
          console.log(res);
          if (res?.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "The Event Gallery has been removed.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto pt-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Manage Gallery
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full text-left border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-4 px-4 font-semibold">#</th>
              <th className="py-4 px-4 font-semibold">Title</th>
              <th className="py-4 px-4 font-semibold">Date</th>
              <th className="py-4 px-4 font-semibold">Images</th>
              <th className="py-4 px-4 font-semibold">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {gallery.length > 0 ? (
              [...gallery].reverse().map((event, index) => (
                <tr
                  key={event.title}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  {/* Index */}
                  <td className="py-4 px-4">{index + 1}</td>

                  {/* Title */}
                  <td className="py-4 px-4">{event.title}</td>

                  {/* Date */}
                  <td className="py-4 px-4">{event.date}</td>

                  {/* Images */}
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      {event.images.slice(0, 5).map((image, idx) => (
                        <img
                          key={idx}
                          src={image}
                          alt={event.title}
                          className="w-20 h-20 object-cover rounded border border-gray-300"
                        />
                      ))}
                      {event.images.length > 5 && (
                        <span className="text-gray-500 text-sm">
                          +{event.images.length - 5} more
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-500">
                  No events available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageGallery;
