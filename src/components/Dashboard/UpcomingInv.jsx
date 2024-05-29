import React from 'react';
import Invoice from './Invoice';

const UpcomingInv = () => {
  const invoices = [
    {
      "id": 1,
      "invoiceNumber": "INV001",
      "invoiceItem": "Zeraki Finance",
      "creationDate": "2024-05-01",
      "dueDate": "2024-06-01",
      "amount": 10000,
      "amountPaid": 0,
      "balance": 10000,
      "completionStatus": false,
      "daysUntilDue": 3,
      "client": "Greenwood Secondary School"
    },
    {
      "id": 2,
      "invoiceNumber": "INV002",
      "invoiceItem": "Zeraki Timetable",
      "creationDate": "2024-05-05",
      "dueDate": "2024-06-05",
      "amount": 12000,
      "amountPaid": 0,
      "balance": 12000,
      "completionStatus": false,
      "daysUntilDue": 7,
      "client": "Sunrise Primary School"
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="mb-2 text-2xl text-blue-400">Upcoming Invoices</div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.length > 0 ? invoices.map(inv => (
            <Invoice key={inv.id} invoice={inv}/>
          )) : (<tr><td colSpan="4" className="px-6 py-4 text-sm text-gray-500">No invoices Available</td></tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingInv;
