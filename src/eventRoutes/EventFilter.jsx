import { useState } from "react";

const EventFilter = ({ yearsFilter, setYear, handleReset }) => {
  const [selectedYear, setSelectedYear] = useState(""); // Store the dropdown value

  const handleConfirm = () => {
    setYear(selectedYear); // Apply the filter only when the Confirm button is clicked
  };

  return (
    <div className="flex flex-row items-center gap-3 ">
      {/* Dropdown for year selection */}
      <select
        onChange={(e) => setSelectedYear(e.target.value)}
        value={selectedYear}
        aria-label="Filter by Year"
        className="w-36 lg:w-80 px-4 py-2 border border-indigo-600 bg-indigo-600 text-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 hover:ring-blue-500"
      >
        <option value="" disabled>
          Select Year
        </option>
        {yearsFilter?.length > 0 ? (
          yearsFilter.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No years available
          </option>
        )}
      </select>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        aria-label="Confirm Selection"
        className="md:px-6 p-1 md:py-2 flex items-center gap-2 bg-fuchsia-600 text-gray-100 font-semibold md:text-lg hover:bg-green-500 duration-150 hover:scale-105 rounded-lg focus:ring-2 focus:ring-green-400"
      >
        Confirm
      </button>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        aria-label="Reset Filters"
        className="md:px-6 md:py-2 p-1 flex items-center gap-2 bg-rose-600 text-gray-100 font-semibold md:text-lg hover:bg-green-500 duration-150 hover:scale-105 rounded-lg focus:ring-2 focus:ring-green-400"
      >
        Reset
      </button>
    </div>
  );
};

export default EventFilter;
