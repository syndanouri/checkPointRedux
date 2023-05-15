import React, { createContext, useState } from "react";

export const DeleteContext = createContext("");
function ContextProvider({ children }) {
  const [dlttask, setDlettask] = useState(false);

  return (
    <>
      <DeleteContext.Provider value={{ dlttask, setDlettask }}>
        {children}
      </DeleteContext.Provider>
    </>
  );
}

export default ContextProvider;
