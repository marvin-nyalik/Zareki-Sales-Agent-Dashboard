import React, { useState } from 'react';
import InvoiceModal from './InvoiceModal';
import AddCollectionModal from './AddCollectionModal';
import { deleteInvoice } from '../../redux/invoices/invoiceSlice';
import { useDispatch } from 'react-redux';
import UpdateInvoiceModal from './UpdateInvoiceModal';

const SchoolInvoices = ({ school, schoolInvoices }) => {
  const [showCompleted, setShowCompleted] = useState(true);
  const [showPending, setShowPending] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showUpdModal, setShowUpdModal] = useState(false);
  const [showColModal, setShowColModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleOpenUpdModal = (invoice) => {
    setSelectedInvoice(invoice);
    setShowUpdModal(true);
  };

  const handleOpenColModal = (invoice) => {
    setSelectedInvoice(invoice);
    setShowColModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseUpdModal = () => {
    setShowUpdModal(false);
    setSelectedInvoice(null);
  };

  const handleCloseColModal = () => {
    setShowColModal(false);
    setSelectedInvoice(null);
  };

  const handleCompletedCheckboxChange = () => {
    setShowCompleted(!showCompleted);
  };

  const handlePendingCheckboxChange = () => {
    setShowPending(!showPending);
  };

  const handleDeleteInv = (e, id) => {
    e.stopPropagation();
    dispatch(deleteInvoice(id))
      .unwrap()
      .then(() => {
        alert('Deleted');
      })
      .catch((error) => {
        alert('Failed to delete');
        console.error('Error deleting invoice:', error);
      });
  };

  const filteredInvoices = schoolInvoices.filter((invoice) => {
    if (showCompleted && showPending) {
      return true;
    } else if (showCompleted) {
      return invoice.completionStatus;
    } else if (showPending) {
      return !invoice.completionStatus;
    }
    return false;
  });

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className='flex flex-row items-center'>
            <label className="flex items-center mr-4">
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={handleCompletedCheckboxChange}
                className="mr-2"
              />
              Show Completed
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showPending}
                onChange={handlePendingCheckboxChange}
                className="mr-2"
              />
              Show Pending
            </label>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
            onClick={handleOpenModal}
          >
            Add New Invoice
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-2 px-1 border-b">Invoice Number</th>
              <th className="py-2 px-1 border-b">Invoice Item</th>
              <th className="py-2 px-1 border-b">Creation Date</th>
              <th className="py-2 px-1 border-b">Due Date</th>
              <th className="py-2 px-1 border-b">Amount</th>
              <th className="py-2 px-1 border-b">Amount Paid</th>
              <th className="py-2 px-1 border-b">Balance</th>
              <th className="py-2 px-1 border-b">Completion Status</th>
              <th className="py-2 px-1 border-b">Days Until Due</th>
              <th className="py-2 px-1 border-b">Update</th>
              <th className="py-2 px-1 border-b">Delete</th>
              <th className="py-2 px-1 border-b">Add Collection</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice) => (
              <tr key={invoice.invoiceNumber} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{invoice.invoiceNumber}</td>
                <td className="py-2 px-4 border-b">{invoice.invoiceItem}</td>
                <td className="py-2 px-4 border-b">{invoice.creationDate}</td>
                <td className="py-2 px-4 border-b">{invoice.dueDate}</td>
                <td className="py-2 px-4 border-b">{invoice.amount}</td>
                <td className="py-2 px-4 border-b">{invoice.amountPaid}</td>
                <td className="py-2 px-4 border-b">{invoice.balance}</td>
                <td className="py-2 px-4 border-b">{invoice.completionStatus ? 'Completed' : 'Pending'}</td>
                <td className="py-2 px-4 border-b">{invoice.daysUntilDue}</td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => handleOpenUpdModal(invoice)} className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-semibold py-1 px-3 rounded-lg">
                    Update
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button onClick={(e) => handleDeleteInv(e, invoice.id)} className="bg-red-200 hover:bg-red-300 text-red-800 font-semibold py-1 px-3 rounded-lg">
                    Delete
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => handleOpenColModal(invoice)} className="bg-green-200 hover:bg-green-300 text-blue-800 font-semibold py-1 px-3 rounded-lg">
                    Add Collection
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showColModal && selectedInvoice && <AddCollectionModal invoice={selectedInvoice} handleCloseModal={handleCloseColModal} />}
      {showModal && <InvoiceModal client={school.name} handleCloseModal={handleCloseModal} />}
      {showUpdModal && selectedInvoice && <UpdateInvoiceModal invoice={selectedInvoice} handleCloseModal={handleCloseUpdModal} />}
    </div>
  );
};

export default SchoolInvoices;
