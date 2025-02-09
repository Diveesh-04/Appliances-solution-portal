import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for appliances..."
          className="p-3 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 "
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;