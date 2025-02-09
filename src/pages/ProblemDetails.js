import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ProblemDetails = () => {
  const { categoryId, itemId } = useParams();
  const [problem, setProblem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const docRef = doc(db, "categories", categoryId, "items", itemId, "problems", "problemId");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProblem(docSnap.data());
        } else {
          setError("No problem found with that ID. Fetching AI-generated content...");
          await fetchProblemFromAI(); // Fetch from AI if Firestore data isn't found
        }
      } catch (error) {
        console.error("Error fetching problem details:", error);
        setError("An error occurred while fetching problem details.");
      }
    };

    const fetchProblemFromAI = async () => {
      try {
        const genAI = new GoogleGenerativeAI("AIzaSyCKBQ3mHRXEw-S5I5eNXuasCrcy7zZWOsA ");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const prompt = `Provide a step-by-step solution for a common problem with ${itemId}`;
        const result = await model.generateContent(prompt);

        if (result && result.response) {
          setProblem({
            title: `AI Generated Solution for ${itemId}`,
            steps: result.response.text.split("\n"),
          });
        }
      } catch (aiError) {
        console.error("Error fetching AI-generated problem:", aiError);
        setError("AI service is currently unavailable.");
      }
    };

    fetchProblem();
  }, [categoryId, itemId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!problem) {
    return <div>Loading problem details...</div>;
  }

  return (
    <div>
      <h1>Problem Details for {itemId} in {categoryId}</h1>
      <h2>{problem.title}</h2>
      <ol>
        {problem.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default ProblemDetails;