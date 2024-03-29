import React from "react";
import "./Shimmer.css"; // Import the CSS file for styling

const ShimmerCard = () => {
  return (
    <div className="p-2 m-2 w-72 h-[277px] shadow-md bg-gray-50 rounded-lg shimmer-container">
      <div className="shimmer-content">
        <div className="bg-gray-400 w-[250px] h-[200px] m-auto rounded-md shimmer"></div>
        <ul>
          <li className="bg-gray-400 w-52 h-4 m-1 rounded-sm shimmer"></li>
          <li className="bg-gray-400 w-52 h-4 m-1 rounded-sm shimmer"></li>
          <li className="bg-gray-400 w-52 h-4 m-1 rounded-sm shimmer"></li>
        </ul>
      </div>
    </div>
  );
};

const Shimmer = ({ count = 36 }) => {
  const shimmerItems = Array.from({ length: count }, (_, index) => (
    <ShimmerCard key={index} />
  ));

  return <div className="flex flex-wrap justify-center">{shimmerItems}</div>;
};

export default Shimmer;
