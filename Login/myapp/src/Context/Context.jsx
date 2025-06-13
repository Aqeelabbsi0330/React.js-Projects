import { createContext, useState } from "react";
const Context = createContext({
  User: "null",
  login: () => {},
  logout: () => {},
});
export default Context;
export const ContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const login = (Username, Email) => {
    setUser({ Username, Email });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <Context.Provider value={{ User, login, logout }}>
      {children}
    </Context.Provider>
  );
};
