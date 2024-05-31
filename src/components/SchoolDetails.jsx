import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import SchoolInvoices from "./School/SchoolInvoices";
import Collections from "./School/Collections";
import { calculateSchoolBalance } from "./Dashboard/helpers/helpers";
import Loading from "./Loading";

const SchoolDetails = () => {
  const location = useLocation();
  const { school } = location.state;
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
    calculateSchoolBalance(school.name, invoices, collections) || 0;

  if (invoices.length <= 0 && collections.length <= 0) {
    return (
      <Layout>
        <div>
          <h2 className="font-bold text-xl py-2">{school.name}</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col items-start justify-start space-y-2">
              <p>
                <span className="font-bold">Type:</span> {school.type}
              </p>
              <p>
                <span className="font-bold">County:</span> {school.county}
              </p>
              <p>
                <span className="font-bold">Contact Info:</span>{" "}
                {school.contactInfo}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start space-y-2">
              <p>
                <span className="font-bold">Registration Date:</span>{" "}
                {school.registrationDate}
              </p>
              <p>
                <span className="font-bold">School Balance:</span> {schBalance}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start space-y-2">
              <h3 className="font-bold">Products</h3>
              {school.products.map((prod) => (
                <p key={prod}>{prod}</p>
              ))}
            </div>
          </div>

          <div>
            <div className="py-2 text-2xl text-blue-400">Invoices</div>
            <div className="text-center">No invoices Found</div>
          </div>

          <div className="mb-3">
            <div className="py-2 text-2xl text-blue-400">Collections</div>
            <div className="text-center">No collections found</div>
          </div>
        </div>
      </Layout>
    );
  }

  if (invoices.length <= 0 || collections.length <= 0) {
    return <Loading />;
  }

  return (
    <Layout>
      <div>
        <h2 className="font-bold text-xl py-2">{school.name}</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-start justify-start space-y-2">
            <p>
              <span className="font-bold">Type:</span> {school.type}
            </p>
            <p>
              <span className="font-bold">County:</span> {school.county}
            </p>
            <p>
              <span className="font-bold">Contact Info:</span>{" "}
              {school.contactInfo}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start space-y-2">
            <p>
              <span className="font-bold">Registration Date:</span>{" "}
              {school.registrationDate}
            </p>
            <p>
              <span className="font-bold">School Balance:</span> {schBalance}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start space-y-2">
            <h3 className="font-bold">Products</h3>
            {school.products.map((prod) => (
              <p key={prod}>{prod}</p>
            ))}
          </div>
        </div>

        <div>
          <div className="py-2 text-2xl text-blue-400">Invoices</div>
          <SchoolInvoices school={school} schoolInvoices={invoices} />
        </div>

        <div className="mb-3">
          <div className="py-2 text-2xl text-blue-400">Collections</div>
          <Collections collections={collections} />
        </div>
      </div>
    </Layout>
  );
};

export default SchoolDetails;
