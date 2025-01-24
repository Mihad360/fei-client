import NewEvent from "./NewEvent";
import Marquee from "react-fast-marquee";
import useEvents from "../hooks/useEvents";
import { Link } from "react-router-dom";

const NewEvents = () => {
  const [events] = useEvents();

  return (
    <div>
      <div className="min-h-screen max-w-[1400px] mx-auto pt-16">
        <h1 className="text-4xl font-bold text-center pb-16 text-purple-700">
          Upcoming New Events
        </h1>
        <Marquee gradient={false} speed={50} pauseOnHover className="space-x-4">
          <div className="flex gap-4">
            {events
              ?.filter((event) => event.status === "New Event")
              .map((event) => (
                <NewEvent key={event._id} event={event}></NewEvent>
              ))}
          </div>
        </Marquee>
      </div>

      <div className="text-center">
        <Link to='/events' className=" bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none">
          View All Events
        </Link>
      </div>
    </div>
  );
};

export default NewEvents;
