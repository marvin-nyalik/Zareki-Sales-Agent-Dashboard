import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCollection } from "../../redux/collections/collectionSlice";

const CollectionModal = ({ collection, onClose }) => {
  const [newStatus, setNewStatus] = useState(collection.status);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices);

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleUpdateConnection = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      dispatch(
        updateCollection({
          id: collection.id,
          updatedData: { status: newStatus },
        })
      );
      alert("Collection updated");

      // if (newStatus === 'Bounced') {
      //   const invoiceToUpdate = invoices.find((invoice) => invoice.id === collection.invoiceId);
      //   if (invoiceToUpdate) {
      //     dispatch(
      //       updateInvoice({...invoiceToUpdate, completionStatus: false})
      //     );
      //     alert('Invoice completion status Pending');
      //   }
      // }
    } catch (error) {
      alert("Failed to update");
    } finally {
      onClose();
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Update Collection Status</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label htmlFor="newStatus" className="block mb-1">
              New Status:
            </label>
            <select
              id="newStatus"
              value={newStatus}
              onChange={handleStatusChange}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="Valid">Valid</option>
              <option value="Bounced">Bounced</option>
            </select>
          </div>
          <div className="text-right">
            <button
              onClick={(e) => handleUpdateConnection(e)}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollectionModal;
