import React from "react";

const Card = ({ label, count, details }) => {
  return (
    <div className="p-3 mb-2 border border-2 border-gray-300 rounded-xl">
      <div className="text-center mb-2">
        <p className="font-bold text-green-500 text-xl mb-1">{count}</p>
        <p className="text-base font-semibold">{label}</p>
      </div>
      {details && Object.keys(details).length > 0 && (
        <div className="extra-details border-t border-gray-300 pt-2 mt-2">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="text-sm flex justify-between">
              <span className="font-semibold">{key} </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
