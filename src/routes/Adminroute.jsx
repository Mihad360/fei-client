import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/loader/Loading";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const Adminroute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminloading] = useAdmin();
  console.log(isAdmin);
  const location = useLocation();

  if (loading || isAdminloading) {
    return (
      <div className="text-center py-72">
        <Loading></Loading>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default Adminroute;
