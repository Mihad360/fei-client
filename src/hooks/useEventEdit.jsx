import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useEventEdit = ({id}) => {
  const axiosSecure = useAxiosSecure()
  const {
    data: event = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/events/${id}`);
      return res.data;
    },
  });

  return [event, refetch, isLoading];
};

export default useEventEdit;