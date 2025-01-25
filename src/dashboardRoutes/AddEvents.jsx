import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddEvents = () => {

  const axiosSecure = useAxiosSecure()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const currentDate = moment().format("YYYY-MM-DD");

  const onSubmit = async (data) => {
    const imageFile = { image: data?.image[0] };
    const responseImage = await axios.post(image_hosting_url, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const imageUrl = responseImage?.data.data.display_url;
    const eventInfo = {
      id: uuidv4(),
      status: "New Event",
      title: data.title,
      image: imageUrl,
      description: data.description,
      date: data.date,
      location: data.location,
      category: data.category,
      year: data.year,
      eventTime: data.time,
      publishedDate: currentDate,
    };
    const res = await axiosSecure.post("/events", eventInfo);
    console.log(res);
    if (res?.data.insertedId) {
      toast("✔️ The Event was added successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="pt-5 px-5 lg:px-0">
    <h1 className="text-center text-3xl font-semibold text-white pb-5 pl-8 md:pl-0">
      Add New Events
    </h1>
    <div className="max-w-6xl mx-auto p-6 bg-gray-300 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Event Title
            </label>
            <input
              placeholder="Event Name"
              id="title"
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Event Image
            </label>
            <input
              id="image"
              type="file"
              {...register("image", { required: "Image is required" })}
              className="w-full px-4 py-1 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600 bg-white"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Date */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Event Date
            </label>
            <input
              id="date"
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>
          {/* Time */}
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Event Starting Time
            </label>
            <input
              placeholder="Type Event Time"
              id="time"
              type="text"
              {...register("time", { required: "Time is required" })}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Year */}
          <div className="mb-4">
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">
              Present Year
            </label>
            <input
              placeholder="Present Year"
              id="year"
              type="number"
              {...register("year", {
                required: "Year is required",
                min: 1900,
                max: 2100,
              })}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
            />
            {errors.year && (
              <p className="text-red-500 text-sm">{errors.year.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Location */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              placeholder="Location"
              id="location"
              type="text"
              {...register("location", { required: "Location is required" })}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              defaultValue=""
              id="category"
              {...register("category", { required: "Category is required" })}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
            >
              <option value="" disabled>Select Category</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Art">Art</option>
              <option value="Travel">Travel</option>
              <option value="Educational">Educational</option>
              <option value="Holiday">Holiday</option>
              <option value="Entertainment">Entertainment</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Event Description .........."
            id="description"
            rows="4"
            {...register("description", { required: "Description is required" })}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-fuchsia-600 text-white py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default AddEvents;
