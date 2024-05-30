import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const calculateRevenuePerInvoiceItem = (invoices) => {
  return invoices.reduce((acc, invoice) => {
    if (acc[invoice.invoiceItem]) {
      acc[invoice.invoiceItem] += invoice.amount;
    } else {
      acc[invoice.invoiceItem] = invoice.amount;
    }
    return acc;
  }, {});
  };
  
export const countProductOccurrences = (schools) => {
  return schools.reduce((acc, school) => {
    school.products.forEach(product => {
      acc[product] = (acc[product] || 0) + 1;
    });
    return acc;
  }, {});
};

export const schoolTypeCount = (schools) => {
  return schools.reduce((acc, school) => {
    acc[school.type] = (acc[school.type] || 0) + 1;
    return acc;
  }, {});
};

export const deleteCol = async (id) => {
  try {
    const res = await deleteCollection(id);
    alert('Deleted');
  } catch (error) {
    alert('Failed to delete');
    console.error('Error deleting collection:', error);
  }
};

export const schoolsByTypePerProduct = (schools) => {
  const result = {};

  schools.forEach((school) => {
    school.products.forEach((product) => {
      if (!result[product]) {
        result[product] = {};
      }
      result[product][school.type] = (result[product][school.type] || 0) + 1;
    });
  });

  return result;
};

const collectionApiUrl = `https://mock-server-k755.onrender.com/collections`;

export const createCollection = async (collection) => {
  const res = await axios.post(collectionApiUrl, collection).
    then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export const patchCollection = async (collectionId, updatedData) => {
  const res = await axios.patch(`${collectionApiUrl}/${collectionId}`, updatedData)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

export const deleteCollection = async (resourceId) => {
  try {
    const response = await axios.delete(`${collectionApiUrl}/${resourceId}`);
  } catch (error) {
    console.error('Error deleting resource:', error);
  }
};

const invoiceApiUrl = `https://mock-server-k755.onrender.com/invoices`;

export const createInvoice = async (invoice) => {
  const res = await axios.post(invoiceApiUrl, invoice).
    then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export  const generateItemNumber = () => {
  const min = 10000;
  const max = 50000;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum.toString();
};

export  const generateUniqueId = () => {
  const uuid = uuidv4();
  return uuid;
};

export const calculateBalance = (invoice, collections) => {
  const totalCollectionsAmount = collections.reduce((total, collection) => {
    if (collection.invoiceNumber === invoice.invoiceNumber) {
      return total + parseFloat(collection.amount);
    }
    return total;
  }, 0);

  const outstandingBalance = parseFloat(invoice.amount) - totalCollectionsAmount;

  return outstandingBalance;
};


export const calculateSchoolBalance = (schoolName, invoices, collections) => {
  const schoolInvoices = invoices.filter((invoice) => invoice.client === schoolName);
  const schoolCollections = collections.filter((collection) => collection.client === schoolName);

  const totalInvoicesAmount = schoolInvoices.reduce((total, invoice) => total + parseFloat(invoice.amount), 0);
  const totalCollectionsAmount = schoolCollections.reduce((total, collection) => total + parseFloat(collection.amount), 0);

  const schoolBalance = totalInvoicesAmount - totalCollectionsAmount;

  return schoolBalance;
};

