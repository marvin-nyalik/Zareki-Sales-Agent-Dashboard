import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useContext } from "react";
import { MobileContext } from "../../context/MobileContext";

const Card = ({ label, count, details, maxValue }) => {
  const isMobile = useContext(MobileContext);
  return (
    <div className="p-3 mb-3 border border-1 border-gray-300 rounded-xl shadow-xl bg-white mx-auto">
      <h3 className="text-base text-center mb-4 font-semibold">
        {label.toUpperCase()}
      </h3>
      <ReactSpeedometer
        width={isMobile ? 450 : 200}
        height={isMobile ? 250 : 150}
        value={count}
        minValue={0}
        maxValue={maxValue}
        needleColor="blue"
        startColor="green"
        segments={label === "Revenue" ? 5 : 10}
        endColor="blue"
        className="mx-auto mb-2 border-b border-gray-200 border"
      />
      <div className="text-center mb-2">
        <p className="font-bold text-green-500 text-xl mb-1">{count}</p>
      </div>
      {details && Object.keys(details).length > 0 && (
        <div className="extra-details border-t border-gray-300 pt-2 mt-2">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="text-sm flex justify-between">
              <span className="font-semibold mr-2">{key.split(" ")[1]} </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
