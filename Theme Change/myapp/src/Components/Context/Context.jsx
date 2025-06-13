import React from "react";
import { createContext, useState } from "react";
const Context = createContext({
  isDark: false,
});
export default Context;
export const ContextProvider = ({ children }) => {
  const [isDark, setisDark] = useState(false);
  return (
    <Context.Provider value={{isDark, setisDark }}>
      {children}
    </Context.Provider>
  );
};
