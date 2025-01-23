import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useEvents = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: events = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data;
    },
  });

  return [events, refetch, isLoading];
};

export default useEvents;
