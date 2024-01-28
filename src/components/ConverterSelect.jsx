import React from "react";

const ConverterSelect = ({ currency, setCurrency, rates }) => {
  return (
    <select className="select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
      {rates.map((rate) => (
        <option key={rate[0]} value={rate[0]}>
          {rate[0]}
        </option>
      ))}
    </select>
  );
};

export default ConverterSelect;
