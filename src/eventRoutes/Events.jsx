import NewEvent from "../home/NewEvent";
import useEvents from "../hooks/useEvents";

const Events = () => {
  const [events, refetch] = useEvents();

  return (
    <div>
      <div className="min-h-screen max-w-[1400px] mx-auto pt-28">
        <h1 className="text-center text-3xl font-semibold text-purple-700 pb-12">All Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...events]?.reverse().map((event) => (
            <NewEvent key={event._id} event={event}></NewEvent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
