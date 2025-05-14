import React, { useId } from 'react';
import './Input.css'; // importing CSS file

export  function Input({
  label,
  Amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
    const amountId=useId()
  return (
    <div>
      <div className={`input-container ${className}`}>
        <div className="input-left">
          <label htmlFor={amountId} className="input-label">
            {label}
          </label>
          <input
            className="input-field"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            id={amountId}
            value={Amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className="input-right">
          <p className="currency-label">Currency Type</p>
          <select
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
            className="currency-select"
          >
            {currencyOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
