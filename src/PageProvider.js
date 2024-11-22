import React, { useState, useContext } from 'react';

export const PageContext = React.createContext();

function PageProvider({ children }) {
  const [year, setYear] = useState(String(new Date().getFullYear()))
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  
  return (
    <PageContext.Provider value={{
      year,
      setYear,
      image,
      setImage,
      title,
      setTitle,
      }}>

      {children}
    </PageContext.Provider>
  );
}

export default PageProvider;

