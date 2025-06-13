import { useState } from "react";
import Theme from "./Components/ThemeChange/Theme";
import { ContextProvider } from "./Components/Context/Context";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ContextProvider>
      <Theme />
    </ContextProvider>
  );
}

export default App;
