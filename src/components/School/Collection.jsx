import React, { useState } from 'react';
import CollectionModal from './CollectionModal';

const Collection = ({ collection }) => {
  const [isOpen, setIsModalOpen] = useState(false);

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <tr className="border-b hover:bg-gray-100">
      <td className="px-4 py-2">{collection.collectionNumber}</td>
      <td className="px-4 py-2">{collection.invoiceNumber}</td>
      <td className="px-4 py-2">{collection.dateOfCollection}</td>
      <td className="px-4 py-2">{collection.status}</td>
      <td className="px-4 py-2">{collection.amount}</td>
      <td className="px-4 py-2">
        <button onClick={handleUpdateClick} className="bg-green-500 hover:bg-green-300 text-white font-semibold py-1 px-3 rounded-lg">
          Update
        </button>
      </td>
    </tr>
    {isOpen && <CollectionModal collection={collection} onClose={handleCloseModal}/>}
    </>
  );
}

export default Collection;
