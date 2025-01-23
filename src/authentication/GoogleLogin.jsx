import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { Bounce, toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { user, googleLogin } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogle = async () => {
    await googleLogin().then(async (res) => {
      if (res?.user.email) {
        toast("✔️ You are Signed up Successfully", {
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
      }
      const userInfo = {
        name: res?.user.displayName,
        email: res?.user.email,
      };
      await axiosPublic.post("/users", userInfo);
    //   if (response.data.insertedId) {
    //     toast("✔️ You are Signed up Successfully", {
    //       position: "top-right",
    //       autoClose: 3000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: false,
    //       draggable: false,
    //       progress: undefined,
    //       theme: "light",
    //       transition: Bounce,
    //     });
    //     await navigate("/");
    //   }
    });
  };

  return (
    <div className="pt-5">
      <button
        onClick={handleGoogle}
        className="text-3xl px-4 py-2 rounded-xl text-white  transition duration-200 bg-gray-700 flex items-center gap-3 w-full justify-center hover:scale-105"
      >
        <FcGoogle />
        <span className="text-lg">Sign In With Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
