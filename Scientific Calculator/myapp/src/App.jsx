import { useState } from "react";
import Calculator from "./Components/Calculator";


import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div>
        <Calculator />
      </div>
    </>
  );
}

export default App;
