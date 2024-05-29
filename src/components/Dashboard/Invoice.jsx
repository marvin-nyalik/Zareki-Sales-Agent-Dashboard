import React, { useState } from 'react';

const Invoice = ({ invoice }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollect = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="px-4 py-2">{invoice.client}</td>
        <td className="px-4 py-2">{invoice.amount}</td>
        <td className="px-4 py-2">{invoice.dueDate}</td>
        <td className='px-4 py-2'>
          <button
            className="bg-green-500 hover:bg-green-600 text-white text-base font-medium py-2 px-4 rounded-lg"
            onClick={handleCollect}
          >
            Collect
          </button>
        </td>
      </tr>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Collect Payment</h2>
            <div>
              <h4 className='my-2'>Payment for {invoice.client} worth {invoice.amount}</h4>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white text-base font-medium py-2 px-4 rounded-lg mr-2">Collect</button>
            <button className="bg-red-500 hover:bg-red-600 text-white text-base font-medium py-2 px-4 rounded-lg" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Invoice;
