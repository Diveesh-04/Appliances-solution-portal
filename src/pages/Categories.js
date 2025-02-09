import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const categoriesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setCategories(categoriesList);
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Categories</h2>
      <div className="grid grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="border p-4 rounded shadow">
            <Link to={`/items/${category.id}`}>
              <h3 className="font-bold">{category.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;