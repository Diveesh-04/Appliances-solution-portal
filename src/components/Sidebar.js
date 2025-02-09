import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/firebaseConfig";  // Make sure firebaseConfig.js is in the correct path

const Sidebar = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, "categories"));
            const fetchedCategories = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCategories(fetchedCategories);
        };
        fetchCategories();
    }, []);

    return (
        <aside className="w-1/4 bg-gray-100 p-4 shadow h-screen">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
                {categories.map(category => (
                    <li key={category.id}>
                        <button
                            onClick={() => onCategorySelect(category.id)}
                            className="block w-full text-left p-2 bg-white hover:bg-blue-500 hover:text-white rounded shadow"
                        >
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;