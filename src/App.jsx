import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";

const Schools = React.lazy(() => import("./components/Schools"));
const SchoolDetails = React.lazy(() => import("./components/SchoolDetails"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/schools"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Schools />
              </Suspense>
            }
          />
          <Route
            path="/schools/:name"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SchoolDetails />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
