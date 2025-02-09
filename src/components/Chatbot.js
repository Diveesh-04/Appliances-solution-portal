import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const sendMessage = (message) => {
    if (!message.trim()) return;
    setMessages([...messages, { text: message, sender: "user" }]);
    setSearchTerm(message);

    // Redirect to search results page with the search term as a query parameter
    navigate(`/search-results?query=${message}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 shadow-xl rounded-xl w-full max-w-md">
        <h2 className="text-center text-xl font-bold mb-4 text-blue-700">
          Home Appliance Problem Chatbot
        </h2>

        <div className="chatbot-messages h-64 overflow-y-scroll mb-4 border p-2 rounded-md">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender} my-2`}>
              <span className="block text-gray-800 p-2 bg-gray-200 rounded-lg">
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="Type a message or search for appliances..."
          className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(e.target.value);
              e.target.value = ""; // Clear input after submission
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chatbot;