/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AdTypeContext = createContext();

export const AdTypeProvider = ({ children }) => {
  const [selectedAdType, setSelectedAdType] = useState('');

  return (
    <AdTypeContext.Provider value={{ selectedAdType, setSelectedAdType }}>
      {children}
    </AdTypeContext.Provider>
  );
};
