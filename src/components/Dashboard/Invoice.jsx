import React, { useState } from "react";
import AddCollectionModal from "../School/AddCollectionModal";
import { calculateBalance } from "./helpers/helpers";
import { useSelector, useDispatch } from "react-redux";
import { updateInvoice } from "../../redux/invoices/invoiceSlice";

const Invoice = ({ invoice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const collections = useSelector((state) => state.collections.collections);
  const dispatch = useDispatch();
  const balance = calculateBalance(invoice, collections);

  const handleCollect = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    dispatch(updateInvoice({ ...invoice, balance: balance }));
  };

  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="px-4 py-2">{invoice.client}</td>
        <td className="px-4 py-2">{balance}</td>
        <td className="px-4 py-2">{invoice.dueDate}</td>
        <td className="px-4 py-2">
          <button
            className="bg-green-500 hover:bg-green-600 text-white text-base font-medium py-2 px-4 rounded-lg"
            onClick={handleCollect}
          >
            Collect
          </button>
        </td>
      </tr>
      {isOpen && (
        <AddCollectionModal
          invoice={invoice}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Invoice;

//  // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//   <div className="bg-white p-6 rounded-lg shadow-lg">
//     <h2 className="text-lg font-semibold mb-4">Collect Payment</h2>
//     <div>
//       <h4 className='my-2'>Collect Payment for {invoice.client} worth {invoice.amount}</h4>
//     </div>

//     <button className="bg-green-500 hover:bg-green-600 text-white text-base font-medium py-2 px-4 rounded-lg mr-2">Collect</button>
//     <button className="bg-red-500 hover:bg-red-600 text-white text-base font-medium py-2 px-4 rounded-lg" onClick={handleCloseModal}>Close</button>
//   </div>
// </div>
