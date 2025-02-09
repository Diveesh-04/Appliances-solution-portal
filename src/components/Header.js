import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 shadow-lg">
      <div className="flex justify-between items-center container mx-auto px-6">
        {/* Logo Section */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <Link to="/">Home Appliances Solutions</Link>
        </h1>

        {/* Navigation */}
        <nav>
          <Link
            to="/login"
            className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-blue-50 hover:shadow-lg transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;