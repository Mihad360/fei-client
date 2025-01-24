import axios from "axios";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddEventsGallery = () => {
  const axiosSecure = useAxiosSecure()

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
      date: "",
      images: [{ image: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const onSubmit = async (data) => {
    try {
    //   alert("Uploading images. Please wait...");
      const uploadPromises = data.images.map(async (imageData) => {
        try {
          const formData = new FormData();
          formData.append("image", imageData.image[0]);

          const response = await axios.post(image_hosting_url, formData, {
            headers: {
              "content-type": "multipart/form-data",
            },
          });

          return response.data.data.display_url; 
        } catch (error) {
          console.error("Failed to upload image:", error);
          return null;
        }
      });

      const uploadedImageUrls = (await Promise.all(uploadPromises)).filter(
        (url) => url !== null
      );

      if (uploadedImageUrls.length === 0) {
        alert("No images were uploaded. Please try again.");
        return;
      }

      const eventData = {
        title: data.title,
        date: data.date,
        images: uploadedImageUrls,
      };

      const galleryResponse = await axiosSecure.post("/gallery", eventData);

      console.log("Gallery Response:", galleryResponse);
      console.log("Event Data with Uploaded Images:", eventData);

      reset();
      alert(
        "Images uploaded successfully and event photos added to the gallery!"
      );
    } catch (error) {
      console.error("Error during the submission process:", error);
      alert(
        "An error occurred while processing your request. Please try again."
      );
    }
  };

  return (
    <div className="pt-6">
      <h2 className="text-3xl text-center font-semibold text-white pb-6">
        Add Event Photos to Gallery
      </h2>
      <div className="max-w-5xl mx-auto p-6 bg-gray-200 rounded-md shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title Field */}
          <div className="flex gap-5">
            <div className="w-full">
              <label htmlFor="title" className="block text-black mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: "Title is required" })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-fuchsia-300"
                placeholder="Event Title"
              />
            </div>

            {/* Date Field */}
            <div className="w-full">
              <label htmlFor="date" className="block text-black mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                {...register("date", { required: "Date is required" })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-fuchsia-300"
              />
            </div>
          </div>

          {/* Images Field */}
          <div className="">
            <label htmlFor="images" className="block text-black mb-2">
              Images
            </label>

            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center mb-2 space-x-2">
                <input
                  type="file"
                  {...register(`images.${index}.image`, {
                    required: "Image is required",
                  })}
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-fuchsia-300 border-gray-400 w-full"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="px-2 py-1 text-white bg-red-500 rounded-md"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => append({ image: "" })}
              className="px-4 py-2 mt-2 text-white bg-green-500 rounded-md"
            >
              Add Another Image
            </button>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-fuchsia-600 rounded-md hover:bg-fuchsia-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventsGallery;
