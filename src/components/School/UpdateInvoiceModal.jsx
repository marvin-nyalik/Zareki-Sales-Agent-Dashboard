import React, { useState } from "react";
import { updateInvoice } from "../../redux/invoices/invoiceSlice";
import { useDispatch } from "react-redux";

const UpdateInvoiceModal = ({ invoice, handleCloseModal }) => {
  const initialState = {
    amount: invoice.amount,
    product: invoice.invoiceItem,
    dueDate: invoice.dueDate,
    status: invoice.completionStatus,
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "status" ? value === "true" : value, // handle status as boolean
    });
  };

  const handleUpdateInvoice = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const creationDate = new Date(invoice.creationDate);
      const dueDateObj = new Date(formData.dueDate);
      const timeDiff = dueDateObj - creationDate;
      const daysUntilDue = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      const updatedInvoice = {
        ...invoice,
        amount: parseFloat(formData.amount),
        invoiceItem: formData.product,
        dueDate: formData.dueDate,
        completionStatus: formData.status,
        daysUntilDue,
        balance: parseFloat(formData.amount) - invoice.amountPaid,
      };

      const response = await dispatch(updateInvoice(updatedInvoice));
      if (response.error) {
        throw new Error(response.error.message);
      }
      alert("Invoice updated");
    } catch (error) {
      alert("Update Failed");
    } finally {
      handleCloseModal();
      setFormData(initialState);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Update Invoice</h2>
        <form onSubmit={handleUpdateInvoice}>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-1">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block mb-1">
              Status:
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            >
              <option value={true}>Completed</option>
              <option value={false}>Pending</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="product" className="block mb-1">
              Product:
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            >
              <option value="Zeraki Finance">Zeraki Finance</option>
              <option value="Zeraki Timetable">Zeraki Timetable</option>
              <option value="Zeraki Analytics">Zeraki Analytics</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dueDate" className="block mb-1">
              Due Date:
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
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

export default UpdateInvoiceModal;
