import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewEvent = ({ event }) => {
  const {
    title,
    image,
    description,
    date,
    location,
    category,
    year,
    status,
    eventTime,
  } = event;

  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800">
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      {/* Card Content */}
      <div className="p-5 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
          <div className="flex justify-between items-center">
            <span className="inline-block px-3 py-1 mt-2 text-sm font-semibold text-white bg-indigo-600 rounded-full">
              {category} Program
            </span>
            <span className="inline-block px-3 py-1 mt-2 text-sm font-semibold text-white bg-rose-600 rounded-full">
              {status} {status === 'New Event' && "Coming Soon"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center font-bold">
            <svg
              className="w-5 h-5 text-blue-500 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 4V2h2v2h6V2h2v2h4v20H3V4h4zm2 2H5v16h14V6h-4v2h-2V6H9v2H7V6zm1 4h6v2H9v-2z" />
            </svg>
            {date} at {eventTime}
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15H9v-2h2v2zm4-4H9V9h2v2h4v2z" />
            </svg>
            {location}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400 dark:text-gray-500">
            Published: {date}
          </div>
          <div>
            <Link className=" bg-fuchsia-600 text-white px-6 py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none">
              View Program
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;
