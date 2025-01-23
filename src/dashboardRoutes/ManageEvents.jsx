import { Link } from "react-router-dom";
import useEvents from "../hooks/useEvents";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ManageEvents = () => {
  const [events, refetch] = useEvents();

  const axiosPublic = useAxiosPublic()

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
        axiosPublic.delete(`/event/${id}`).then((res) => {
          console.log(res);
          if (res?.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "The Event has been removed.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-white text-center dark:text-white mb-8">
        Manage Events
      </h1>
      <div className="overflow-x-auto">
        <table className="max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-xl">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <th className="px-4 py-4 text-left font-semibold">#</th>
              <th className="px-4 py-4 text-left font-semibold">Event Title</th>
              <th className="px-4 py-4 text-left font-semibold">Category</th>
              <th className="px-4 py-4 text-left font-semibold">Date</th>
              <th className="px-4 py-4 text-left font-semibold">Status</th>
              <th className="px-4 py-4 text-left font-semibold">Actions</th>
              <th className="px-4 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...events].reverse().map((event, index) => (
              <tr
                key={event.id}
                className="border-t dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
              >
                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-4 text-gray-800 dark:text-white font-medium">
                  {event.title}
                </td>
                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">
                  {event.category}
                </td>
                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">
                  {event.date}
                </td>
                <td className="px-4 py-4 text-black  dark:text-gray-300">
                  {event.status}
                </td>
                <td className="px-4 py-4 text-center flex justify-between">
                  {/* <button
                    className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-fuchsia-600 rounded-lg hover:bg-fuchsia-700 shadow-md transition duration-200"
                    onClick={() => console.log(`Edit ${event.title}`)}
                  >
                    Make Event Completed
                  </button> */}
                  <Link
                    to={`/dashboard/manage-events/edit-event/${event._id}`}
                    className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-fuchsia-600 rounded-lg hover:bg-fuchsia-700 shadow-md transition duration-200"
                  >
                    Edit
                  </Link>
                  <button onClick={()=>handleDelete(event._id)} className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-md transition duration-200">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEvents;
