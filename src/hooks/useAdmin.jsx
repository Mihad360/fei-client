import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminloading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    // enabled: !loading && !!user,
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(`/user/admin/${user?.email}`);
        return res.data?.admin;
      }
    },
  });
  return [isAdmin, isAdminloading];
};

export default useAdmin;
