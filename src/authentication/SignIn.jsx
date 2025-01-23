import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Bounce, toast } from "react-toastify";
import GoogleLogin from "./GoogleLogin";

const SignIn = () => {
  const { createSignIn, user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await createSignIn(data.email, data.password).then(async () => {
      toast("✔️ You are Signed In", {
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
      await navigate("/");
      // window.location.reload();
    });
  };

  return (
    <div className="shapedividers_com-332">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center relative z-30 h-screen">
          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center p-6">
            <img
              src="https://i.ibb.co/fFzsx0b/3809828-removebg-preview.png"
              alt="Sign In Visual"
              className="w-[500px] object-contain"
            />
          </div>

          {/* Form Section */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                Sign In Here
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
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
                    New to ISS Club ?? Please{" "}
                    <Link
                      to="/signup"
                      className="text-indigo-600 font-semibold underline-offset-4 underline"
                    >
                      Sign Up Here...
                    </Link>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-fuchsia-500 text-white font-semibold rounded-lg shadow-md hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                >
                  Sign In
                </button>
              </form>
              <div>
                <GoogleLogin></GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
