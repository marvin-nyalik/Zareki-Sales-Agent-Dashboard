import React from "react";
import Invoice from "./Invoice";

const UpcomingInv = ({ invoices }) => {
  const sortedInvoices = [...invoices].sort((a, b) =>
    a.dueDate.localeCompare(b.dueDate)
  );
  return (
    <div className="overflow-x-auto">
      <div className="mb-2 text-2xl text-blue-400">Upcoming Invoices</div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              School
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Due Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedInvoices.length > 0 ? (
            sortedInvoices.map((inv) => <Invoice key={inv.id} invoice={inv} />)
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-sm text-gray-500">
                No invoices Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingInv;
