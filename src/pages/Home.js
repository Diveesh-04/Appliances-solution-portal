import React, { useState } from "react";
import Searchbar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://source.unsplash.com/featured/?home,appliances')" }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen p-8">
        <h1 className="text-4xl font-extrabold p-4 text-center">
          Welcome to Home Appliances Solutions
        </h1>
        <Searchbar onSearch={handleSearch} />
        {searchTerm ? (
          <div className="text-center mt-6">
            <h2 className="text-2xl">Showing results for: <span className="font-semibold">{searchTerm}</span></h2>
          </div>
        ) : (
          <div className="mt-10 text-center">
            <p className="text-xl mb-4">
              Browse through our categories for step-by-step solutions!
            </p>
            <Link to="/categories">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:from-indigo-500">
                View Categories
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;