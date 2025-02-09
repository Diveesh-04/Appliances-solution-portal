import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseApp } from "../firebaseConfig"; // Ensure your Firebase config is properly set up

const db = getFirestore(firebaseApp);

const SearchResults = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("query");
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const fetchSolutions = async () => {
      const q = query(
        collection(db, "appliance_solutions"),
        where("appliance_name", "==", searchTerm)
      );
      const querySnapshot = await getDocs(q);

      const resultData = [];
      querySnapshot.forEach((doc) => {
        resultData.push(doc.data());
      });

      setSolutions(resultData);
    };

    if (searchTerm) fetchSolutions();
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Solutions for: {searchTerm}
      </h1>

      {solutions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg">
              <h2 className="font-semibold">{solution.title}</h2>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No solutions found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default SearchResults;