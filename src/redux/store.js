import { configureStore } from '@reduxjs/toolkit';
import collectionSlice from './collections/collectionSlice';
import invoicesReducer from './invoices/invoiceSlice';
import schoolsReducer from './schools/schoolsSlice';

const store = configureStore({
  reducer: {
    collections: collectionSlice,
    invoices: invoicesReducer,
    schools: schoolsReducer,
  },
});

export default store;
