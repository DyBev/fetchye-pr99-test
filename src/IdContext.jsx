import React, { createContext, useState } from 'react';

export const IdContext = createContext({ id: 1, setId: (_) => {} })

const IdContextProvider = ({ children }) => {
  const [id, setId] = useState(1);

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};

export default IdContextProvider;
