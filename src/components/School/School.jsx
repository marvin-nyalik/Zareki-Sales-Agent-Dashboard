import React from 'react';
import { Link } from 'react-router-dom';

const School = ({ school }) => {
  return (
    <tr className="border-b">
      <td className="py-2 px-4">{school.name}</td>
      <td className="py-2 px-4">{school.type}</td>
      <td className="py-2 px-4">{school.county}</td>
      <td className="py-2 px-4">{school.schoolBalance}</td>
      <td className="py-2 px-4">
        <Link 
          to={`/schools/${encodeURIComponent(school.name)}`}
          state={{school}}
        >
          <button
            className="bg-green-500 hover:bg-green-600 text-white text-base font-medium py-2 px-4 rounded-lg"
          >
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default School;
