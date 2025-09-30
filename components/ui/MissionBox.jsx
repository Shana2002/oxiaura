import React from "react";

const MissionBox = ({ title, description, className, image }) => {
  const design = image
    ? "text-xl font-bold mb-6"
    : "text-2xl font-bold mb-2 text-green-700";

  return (
    <div
      className={`rounded-2xl p-3 flex flex-col ${className} border border-gray-300 justify-center items-center`}
    >
      <h1 className={design}>{title}</h1>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-1/2 h-1/2 object-contain mb-6"
        />
      )}
      <p className="text-lg text-center px-6 md:px-20">{description}</p>
    </div>
  );
};

export default MissionBox;
