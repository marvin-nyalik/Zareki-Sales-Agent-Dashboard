import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateSchoolBalance } from "../Dashboard/helpers/helpers";

const School = ({ school }) => {
  const { invoices, collections } = useSelector((state) => ({
    invoices:
      state.invoices.invoices.filter(
        (invoice) => invoice.client === school.name
      ) || [],
    collections:
      state.collections.collections.filter(
        (collection) => collection.client === school.name
      ) || [],
  }));

  const schBalance =
    invoices.length > 0 && collections.length > 0
      ? calculateSchoolBalance(school.name, invoices, collections)
      : 0;

  return (
    <tr className="border-b">
      <td className="py-2 px-4">{school.name}</td>
      <td className="py-2 px-4">{school.type}</td>
      <td className="py-2 px-4">{school.county}</td>
      <td className="py-2 px-4">{schBalance}</td>
      <td className="py-2 px-4">
        <Link
          to={`/schools/${encodeURIComponent(school.name)}`}
          state={{ school }}
        >
          <button className="bg-green-500 hover:bg-green-600 text-white text-base font-medium py-2 px-4 rounded-lg">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default School;
