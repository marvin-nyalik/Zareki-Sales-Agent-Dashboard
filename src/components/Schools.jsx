import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Layout";
import School from "./School/School";
import Loading from "./Loading";
import { fetchSchools } from "../redux/schools/schoolsSlice";
import { fetchCollections } from "../redux/collections/collectionSlice";
import { fetchInvoices } from "../redux/invoices/invoiceSlice";

const Schools = () => {
  const { schools, loading, error } = useSelector((state) => state.schools);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchSchools());
    dispatch(fetchInvoices());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
                <th className="py-2 px-4 border-b-2 border-gray-300">
                  Balance
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {schools.length > 0 ? (
                schools.map((school) => (
                  <School key={school.id} school={school} />
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-2 px-4 text-center">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

export default Schools;
