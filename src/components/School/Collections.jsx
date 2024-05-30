import React from "react";
import Collection from "./Collection";

const Collections = ({ collections }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-2 px-4 border-b">Collection Number</th>
            <th className="py-2 px-4 border-b">Invoice No.</th>
            <th className="py-2 px-4 border-b">Date of Collection</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Update</th>
          </tr>
        </thead>
        <tbody>
          {collections.length > 0 ? (
            collections.map((col) => (
              <Collection key={col.id} collection={col} />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-2 px-4 text-center">
                No collections
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Collections;
