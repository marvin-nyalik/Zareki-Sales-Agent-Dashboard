import React from 'react';
import Layout from "./Layout";
import School from "./School/School";

const Schools = () => {
  const schools = [
    {
      "id": 1,
      "name": "Greenwood Secondary School",
      "type": "Secondary",
      "products": [
        "Zeraki Finance",
        "Zeraki Analytics"
      ],
      "county": "Nairobi",
      "registrationDate": "2022-01-15",
      "contact": "contact@greenwoodsecondary.edu",
      "schoolBalance": 15000
    },
    {
      "id": 2,
      "name": "Sunrise Primary School",
      "type": "Primary",
      "products": [
        "Zeraki Timetable"
      ],
      "county": "Kisumu",
      "registrationDate": "2021-06-23",
      "contact": "info@sunriseprimary.edu",
      "schoolBalance": 12000
    },
  ];

  return (
    <>
      <Layout>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300">Name</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Type</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">County</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Balance</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Details</th>
              </tr>
            </thead>
            <tbody>
              {schools.length > 0 ? (
                schools.map((school) => (
                  <School key={school.id} school={school} />
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-2 px-4 text-center">No schools available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </Layout>
    </>
  );
}

export default Schools;
