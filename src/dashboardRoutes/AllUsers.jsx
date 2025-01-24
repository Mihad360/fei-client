import useUsers from "../hooks/useUsers";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllUsers = () => {
  const [users, refetch] = useUsers();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()

  const makeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user to Admin!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Seller",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/user/make-admin/${id}`).then((res) => {
          if (res?.data.modifiedCount > 0) {
            Swal.fire({
              title: "Done!",
              text: "The User is now an Admin",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

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
        axiosPublic.delete(`/user/${id}`).then((res) => {
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
        Manage users
      </h1>
      <div className="overflow-x-auto">
        <table className="max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-xl">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <th className="px-4 py-4 text-left font-semibold">#</th>
              <th className="px-4 py-4 text-left font-semibold">Users Name</th>
              <th className="px-4 py-4 text-left font-semibold">Users Email</th>
              <th className="px-4 py-4 text-left font-semibold">Role</th>
              <th className="px-4 py-4 text-left font-semibold">Actions</th>
              <th className="px-4 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...users].reverse().map((user, index) => (
              <tr
                key={user._id}
                className="border-t dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
              >
                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-4 text-gray-800 dark:text-white font-medium">
                  {user.name}
                </td>
                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">
                  {user.email}
                </td>
                <td className="px-4 py-4 text-black  dark:text-gray-300">
                  {user.role === "admin" ? "Admin" : "User"}
                </td>
                <td className="px-4 py-4 text-center">
                  {user?.role === "admin" ? (
                    <p className="text-rose-600">Already Admin</p>
                  ) : (
                    <button
                      onClick={() => makeAdmin(user._id)}
                      className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-fuchsia-600 rounded-lg hover:bg-fuchsia-700 shadow-md transition duration-200"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="px-4 py-4 text-center">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-md transition duration-200"
                  >
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

export default AllUsers;
