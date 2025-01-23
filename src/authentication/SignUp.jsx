import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";
import GoogleLogin from "./GoogleLogin";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const { createUser } = useAuth();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data?.image[0] };
    const responseImage = await axios.post(image_hosting_url, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const imageUrl = await responseImage?.data.data.display_url;
    await createUser(data.email, data.password).then((res) => {
      updateProfile(res.user, {
        displayName: data.name,
        photoURL: imageUrl,
      });
    });
    const userInfo = {
      name: data.name,
      email: data.email,
    }
    const response = await axiosPublic.post('/users', userInfo)
    if(response.data.insertedId){
      toast("✔️ You are Signed Upped", {
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
      await navigate('/')
      // window.location.reload()
    }
  };

  return (
    <div className="shapedividers_com-332">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 h-screen relative z-30 pt-20">
          {/* Image Section */}
          <div className="">
            <img
              src="https://i.ibb.co.com/VLCGPDj/340366-PAPUKD-986-removebg-previews.png"
              alt="Signup Visual"
              className="w-[500px] object-cover"
            />
          </div>

          {/* Form Section */}
          <div className=" flex items-center justify-center p-8 ">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                Create an Account
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Image File Field */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="image"
                  >
                    Profile Picture
                  </label>
                  <input
                    {...register("image", { required: "Image is required" })}
                    type="file"
                    id="image"
                    className="w-full"
                  />
                  {errors.image && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.image.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="pb-5">
                  <p className="text-black text-lg">
                    Already have an account ?? Please{" "}
                    <Link
                      to="/signin"
                      className="text-indigo-600 font-semibold underline-offset-4 underline"
                    >
                      Sign In Here
                    </Link>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-fuchsia-500 text-white font-semibold rounded-lg shadow-md hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                >
                  Sign Up
                </button>
              </form>
              <div className="">
                <GoogleLogin></GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
