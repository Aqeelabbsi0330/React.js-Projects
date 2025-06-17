// src/components/Calculator.js
import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [memory, setMemory] = useState(0);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleScientific = (func) => {
    try {
      let value = eval(input);
      let result;
      switch (func) {
        case "sin":
          result = Math.sin(value);
          break;
        case "cos":
          result = Math.cos(value);
          break;
        case "tan":
          result = Math.tan(value);
          break;
        case "log":
          result = Math.log10(value);
          break;
        case "ln":
          result = Math.log(value);
          break;
        case "√":
          result = Math.sqrt(value);
          break;
        case "∛":
          result = Math.cbrt(value);
          break;
        case "x²":
          result = Math.pow(value, 2);
          break;
        case "x³":
          result = Math.pow(value, 3);
          break;
        case "exp":
          result = Math.exp(value);
          break;
        default:
          result = value;
      }
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleMemory = (action) => {
    try {
      const current = parseFloat(eval(input));
      switch (action) {
        case "M+":
          setMemory((prev) => prev + current);
          break;
        case "M-":
          setMemory((prev) => prev - current);
          break;
        case "MR":
          setInput(memory.toString());
          break;
        case "MC":
          setMemory(0);
          break;
        default:
          break;
      }
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />

      <div className="scientific-buttons">
        {["sin", "cos", "tan", "log", "ln", "√", "∛", "x²", "x³", "exp"].map(
          (btn) => (
            <button key={btn} onClick={() => handleScientific(btn)}>
              {btn}
            </button>
          )
        )}
      </div>

      <div className="scientific-buttons">
        {["M+", "M-", "MR", "MC"].map((btn) => (
          <button key={btn} onClick={() => handleMemory(btn)}>
            {btn}
          </button>
        ))}
      </div>

      <div className="buttons-grid">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "+",
        ].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}

        <button className="backspace" onClick={handleBackspace}>
          ⌫
        </button>
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button className="equal" onClick={handleEqual}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
