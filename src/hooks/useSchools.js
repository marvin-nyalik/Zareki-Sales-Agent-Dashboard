import React, { createContext, useContext, useState } from 'react';

const SchoolsContext = createContext();

export const SchoolsProvider = ({ children }) => {
  const [schoolsData, setSchoolsData] = useState(null);

  const setSchools = (data) => {
    setSchoolsData(data);
  };

  return (
    <SchoolsContext.Provider value={{ schoolsData, setSchools }}>
      {children}
    </SchoolsContext.Provider>
  );
};

export const useSchools = () => useContext(SchoolsContext);
