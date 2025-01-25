import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUsers = () => {
  const {user, loading} = useAuth()
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      if (!user) return [];
      const res = await axiosSecure.get("/users");
      return res.data;
    },
    enabled: !!user,
  });

  return [users, refetch, isLoading];
};

export default useUsers;
