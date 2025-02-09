import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Items = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, "categories", categoryId, "items");
        const querySnapshot = await getDocs(itemsCollection);
        const itemsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
        }));
        setItems(itemsList);
      } catch (err) {
        console.error("Error fetching items:", err);
        setError("Failed to load items.");
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Items</h2>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-3 gap-6">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <Link to={`/problemdetails/${categoryId}/${item.id}/${item.id}`}>
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No items available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Items;