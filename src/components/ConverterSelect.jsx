import React from "react";

const ConverterSelect = ({ currency, setCurrency, rates }) => {
  return (
    <select
      className="select"
      value={currency[0]}
      onChange={(e) => {
        let selectedCurrency = e.target.value;
        const selectedRate = rates.find((rate) => rate[0] === selectedCurrency)[1];
        setCurrency([selectedCurrency, selectedRate]);
      }}
    >
      {rates.map((rate) => (
        <option key={rate[0]} value={rate[0]}>
          {rate[0]}
        </option>
      ))}
    </select>
  );
};

export default ConverterSelect;
