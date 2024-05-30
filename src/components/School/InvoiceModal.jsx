import React, { useState } from "react";
import {
  generateItemNumber,
  generateUniqueId,
  createInvoice,
} from "../Dashboard/helpers/helpers";
import { addInvoice, fetchInvoices } from "../../redux/invoices/invoiceSlice";
import { useDispatch } from "react-redux";

const InvoiceModal = ({ client, handleCloseModal }) => {
  const [amount, setAmount] = useState(0);
  const [product, setProduct] = useState("Zeraki Finance");
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleCreateInvoice = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const creationDate = new Date().toISOString().slice(0, 10);
      const dueDateObj = new Date(dueDate);
      const creationDateObj = new Date(creationDate);
      const timeDiff = dueDateObj - creationDateObj;
      const daysUntilDue = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      const response = await dispatch(
        addInvoice({
          id: generateUniqueId(),
          invoiceNumber: generateItemNumber(),
          invoiceItem: product,
          creationDate: creationDate,
          dueDate: dueDate,
          amount: parseFloat(amount),
          amountPaid: 0,
          balance: parseFloat(amount),
          completionStatus: false,
          daysUntilDue: daysUntilDue,
          client,
        })
      );
      console.log(response);
      dispatch(fetchInvoices());
      alert("Invoice added");
    } catch (error) {
      alert("Failed Addition");
    } finally {
      handleCloseModal();
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Create New Invoice</h2>
        <form onSubmit={handleCreateInvoice}>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-1">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="product" className="block mb-1">
              Product:
            </label>
            <select
              id="product"
              value={product}
              onChange={handleProductChange}
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
              value={dueDate}
              onChange={handleDueDateChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Create
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

export default InvoiceModal;
