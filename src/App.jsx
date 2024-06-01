import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { fetchCollections } from "./redux/collections/collectionSlice";
import { fetchSchools } from "./redux/schools/schoolsSlice";
import { fetchInvoices } from "./redux/invoices/invoiceSlice";
import Dashboard from "./components/Dashboard";
import Loading from "./components/Loading";

const Schools = React.lazy(() => import("./components/Schools"));
const SchoolDetails = React.lazy(() => import("./components/SchoolDetails"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchSchools());
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/schools"
          element={
            <React.Suspense fallback={<Loading />}>
              <Schools />
            </React.Suspense>
          }
        />
        <Route
          path="/schools/:name"
          element={
            <React.Suspense fallback={<Loading />}>
              <SchoolDetails />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
