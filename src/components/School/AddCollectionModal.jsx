import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateItemNumber } from '../Dashboard/helpers/helpers';
import { generateUniqueId } from '../Dashboard/helpers/helpers';
import { createCollection } from '../../redux/collections/collectionSlice';
import { updateInvoice } from '../../redux/invoices/invoiceSlice';

const AddCollectionModal = ({ invoice, handleCloseModal }) => {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
  };

  const handleCreateCollection = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const collection = {
        id: generateUniqueId(),
        invoiceNumber: invoice.invoiceNumber,
        collectionNumber: generateItemNumber(),
        dateOfCollection: new Date().toISOString().slice(0, 10),
        status: 'Valid',
        amount: amount,
        client: invoice.client
      };
      const response = await dispatch(createCollection(collection)).unwrap();
      const newBalance = invoice.balance - amount;
      const isComplete = newBalance <= 0;
      const updatedInvoice = {
        ...invoice,
        balance: newBalance,
        completionStatus: isComplete,
        amountPaid: parseFloat(invoice.amountPaid) + parseFloat(amount),
      };
      await dispatch(updateInvoice(updatedInvoice)).unwrap();
            
      alert('Collection added');
    } catch (error) {
      alert('Failed');
    } finally {
      handleCloseModal();
      setLoading(false);
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ${loading ? 'opacity-30' : ''}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add Collection</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="newStatus" className="block mb-1">
              <input
                id="newStatus"
                type='number'
                required
                value={amount}
                onChange={handleAmountChange}
                className="border rounded px-3 py-2 w-full"
              />
              Amount:
            </label>
          </div>
          <div className="text-right">
            <button onClick={(e) => handleCreateCollection(e)} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              {loading ? 'Adding...':'Add'}
            </button>
            <button type="button" onClick={handleCloseModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCollectionModal;
