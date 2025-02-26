"use client"
import React from "react";
import Educations from "../components/education"; // Correct path to your component

export default function Home() {
  const [showEducation, setShowEducation] = React.useState(false);

  const handleClick = () => {
    setShowEducation(true);
  };

  return (
    <div>
      <div className="flex flex-col items-center"> {/* Removed h-screen and justify-center */}
        <div className="border-2 border-gray-500 p-4 w-full bg-gray-800 mt-16"> {/* mt-16 here */}
          <h1 className="text-white text-4xl text-center">ZAKARIA OUALI</h1>
        </div>
      </div>
      {!showEducation && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Show Education
          </button>
        </div>
      )}
      {showEducation && <Educations />}
    </div>
  );
}