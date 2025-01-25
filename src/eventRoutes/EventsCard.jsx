import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventsCard = () => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  console.log(event);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get(
          `https://fei-server.vercel.app/event/${id}`
        );
        setEvent(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchGallery();
  }, [id]);

  return (
    <div className="pt-28 pb-20 px-5 lg:px-0">
      <div className="max-w-[1400px] mx-auto overflow-hidden rounded-lg dark:bg-gray-800 flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[500px] object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {event.title}
            </h2>

            {/* Category and Status */}
            <div className="flex flex-wrap justify-between items-center mb-4">
              <span className="inline-block px-4 py-2 text-lg font-semibold text-white bg-indigo-600 rounded-full mb-2 md:mb-0">
                {event.category} Program
              </span>
              <span className="inline-block px-4 py-2 text-lg font-semibold text-white bg-rose-600 rounded-full">
                {event.status} {event.status === "New Event" && "Coming Soon"}
              </span>
            </div>
          </div>

          {/* Date and Time */}
          <div className="flex flex-wrap items-center justify-between text-lg text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center font-semibold">
              <svg
                className="w-6 h-6 text-blue-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 4V2h2v2h6V2h2v2h4v20H3V4h4zm2 2H5v16h14V6h-4v2h-2V6H9v2H7V6zm1 4h6v2H9v-2z" />
              </svg>
              Event time: {event.date} at {event.eventTime}
            </div>
            <div className="flex items-center font-semibold">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15H9v-2h2v2zm4-4H9V9h2v2h4v2z" />
              </svg>
              {event.location}
            </div>
          </div>

          {/* Description */}
          <div className="text-lg text-gray-700 dark:text-gray-300">
            <h3 className="font-semibold text-xl mb-2">Event Description</h3>
            <p>{event.description}</p>
          </div>

          {/* Published Date */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Published: {event.publishedDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
