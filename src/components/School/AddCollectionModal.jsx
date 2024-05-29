import React, { useState } from 'react';

const AddCollectionModal = ({ invoice, handleCloseModal }) => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50`}>
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
              Amount:</label>
          </div>
          <div className="text-right">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Add to Invoice
            </button>
            <button type="button" onClick={handleCloseModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCollectionModal;
