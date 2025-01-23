import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Bounce, toast } from "react-toastify";

const EditEvent = () => {
  const event = useLoaderData();
  const axiosPublic = useAxiosPublic()
  const {id} = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const eventInfo = {
      title: data.title,
      description: data.description,
      date: data.date,
      location: data.location,
      eventTime: data.eventTime,
      status: data.status,
      category: data.category,
    };
    const response = await axiosPublic.patch(`/events/${id}`, eventInfo)
    if(response?.data.modifiedCount > 0){
      toast("✔️ The Event was Edited successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="pt-5">
      <h1 className="text-center text-3xl font-semibold text-white pb-5">
        Add New Events
      </h1>
      <div className="max-w-6xl mx-auto p-6 bg-gray-300 rounded-lg shadow-md">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="mb-4 w-full">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Event Title
              </label>
              <input
                defaultValue={event?.title}
                id="title"
                type="text"
                {...register("title", { required: "Title is required" })}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>
            {/* Date */}
            <div className="mb-4 w-full">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Event Date
              </label>
              <input
                defaultValue={event?.date}
                id="date"
                type="date"
                {...register("date", { required: "Date is required" })}
                //  defaultValue='' // Set the current date as default value
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-6">
            <div className="mb-4 w-full">
              <label
                htmlFor="eventTime"
                className="block text-sm font-medium text-gray-700"
              >
                Event Starting Time
              </label>
              <input
                defaultValue={event?.eventTime}
                id="eventTime"
                type="text"
                {...register("eventTime", { required: "Time is required" })}
                //  defaultValue='' // Set the current date as default value
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Present Status <span className="text-rose-600">(Key Information)</span>
              </label>
              <select
                defaultValue={event?.status}
                id="status"
                {...register("status", { required: "status is required" })}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="New Event">New Event</option>
                <option value="Event completed">Event completed</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-sm">
                  {errors.status.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-6">
            {/* Location */}
            <div className="mb-4 w-full">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                defaultValue={event?.location}
                id="location"
                type="text"
                {...register("location", { required: "Location is required" })}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              />
              {errors.location && (
                <p className="text-red-500 text-sm">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Image */}

            {/* Category */}
            <div className="mb-4 w-full">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                defaultValue={event?.category}
                id="category"
                {...register("category", { required: "Category is required" })}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Cultural">Cultural</option>
                <option value="Sports">Sports</option>
                <option value="Art">Art</option>
                <option value="Travel">Travel</option>
                <option value="Educational">Educational</option>
                <option value="Holiday">Holiday</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>
          {/* Description */}
          <div className="mb-4 w-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              defaultValue={event?.description}
              id="description"
              rows="4"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-fuchsia-600 text-white py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none"
            >
              Edit Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
