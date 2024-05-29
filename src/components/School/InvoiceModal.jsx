import React from 'react'

const InvoiceModal = ({ handleCloseModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Create New Invoice</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-1">Amount:</label>
            <input type="text" id="amount" className="border rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="product" className="block mb-1">Product:</label>
            <select id="product" className="border rounded px-3 py-2 w-full">
              <option value="Zeraki Finance">Zeraki Finance</option>
              <option value="Zeraki Timetable">Zeraki Timetable</option>
              <option value="Zeraki Analytics">Zeraki Analytics</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dueDate" className="block mb-1">Due Date:</label>
            <input type="date" id="dueDate" className="border rounded px-3 py-2 w-full" />
          </div>
          <div className="text-right">
            <button type='button' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Create
            </button>
            <button type="button" onClick={handleCloseModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InvoiceModal;
