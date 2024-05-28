import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Schools from './components/Schools';
import Dashboard from './components/Dashboard';
import SchoolDetails from './components/SchoolDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/schools' element={<Schools />}></Route>
        <Route path='/schools/:name' element={<SchoolDetails />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
