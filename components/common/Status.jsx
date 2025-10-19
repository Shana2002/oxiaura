import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const StatusPage = ({ type = "loading", title, subtitle }) => {
  // Determine title & subtitle based on type
  let displayTitle = title;
  let displaySubtitle = subtitle;

  if (type === "error") {
    displayTitle = title || "Oops!";
    displaySubtitle = subtitle || "Something went wrong or data not available.";
  }

  if (type === "loading") {
    displayTitle = title || "Loading...";
    displaySubtitle = subtitle || "Please wait while we fetch the data.";
  }

  // Text color based on type
  const textColor = type === "error" ? "text-red-600" : "text-green-600";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className={`text-5xl font-bold ${textColor}`}>{displayTitle}</h1>
        <p className="text-gray-600 mt-2 text-center">{displaySubtitle}</p>
      </main>
      <Footer />
    </div>
  );
};

export default StatusPage;
