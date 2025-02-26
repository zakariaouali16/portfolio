"use client";
import React from "react";
import Educations from "../components/education";
import Experience from "../components/experience";

export default function Home() {
  const [showEducation, setShowEducation] = React.useState(false);
  const [showExperience, setShowExperience] = React.useState(false);

  const handleClickEdu = () => {
    setShowEducation(true);
  };

  const handleClickExperience = () => {
    setShowExperience(true);
  };

  const handleReturnHome = () => {
    setShowEducation(false);
    setShowExperience(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="border-2 border-gray-500 p-4 w-full bg-gray-800 mt-16">
          <h1 className="text-white text-4xl text-center">ZAKARIA OUALI</h1>
        </div>
      </div>
      {!showEducation && !showExperience && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClickEdu}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Show Education
          </button>
          <button
            onClick={handleClickExperience}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Show Experience
          </button>
        </div>
      )}
      {(showEducation || showExperience) && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleReturnHome}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Return to Home
          </button>
        </div>
      )}
      {showEducation && <Educations />}
      {showExperience && <Experience />}
    </div>
  );
}
