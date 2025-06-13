import { useState, useContext } from "react";
import Context, { ContextProvider } from "./Context/Context";
import Navbar from "./Components/Navbar/Navbar";
import Authentication from "./Components/Authentication/Authentication";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";

function App() {
  const { User } = useContext(Context);
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Authentication />
        {User && <Dashboard />}
      </ContextProvider>
    </>
  );
}

export default App;
