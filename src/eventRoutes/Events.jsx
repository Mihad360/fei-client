import { useEffect, useState } from "react";
import NewEvent from "../home/NewEvent";
import useEvents from "../hooks/useEvents";
import EventFilter from "./EventFilter";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loading from "../components/loader/Loading";

const Events = () => {
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState("");
  const [yearsFilter, setYearsFilter] = useState([]);
  const [events, refetch] = useEvents();
  const axiosPublic = useAxiosPublic();

  const handleReset = () => {
    setYear("");
    window.location.reload();
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axiosPublic.get(`/gallery-search?year=${year}`);
        setYearsFilter(response.data.years); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [year, axiosPublic]);

  const filteredEvents = year
  ? events.filter((event) => event.year === year)
  : events;

  if (loading) {
    return (
      <div className="text-center py-72">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="pt-28">
      <div className="min-h-screen max-w-[1400px] mx-auto pb-20">
        <div className="flex md:flex-row-reverse gap-3 flex-col-reverse items-center justify-between">
          <EventFilter
            handleReset={handleReset}
            yearsFilter={yearsFilter}
            setYear={setYear}
          ></EventFilter>
          <h1 className="text-center text-3xl font-semibold text-purple-700">
            All Events
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {[...filteredEvents].reverse().map((event) => (
            <NewEvent key={event} event={event}></NewEvent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
