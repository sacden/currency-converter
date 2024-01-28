import React, { useCallback } from "react";

const ConverterSelect = ({ currency, setCurrency, rates }) => {
  const handleChange = useCallback(
    (e) => {
      setCurrency(e.target.value);
    },
    [setCurrency]
  );

  return (
    <select className="select" value={currency} onChange={handleChange}>
      {rates.map((rate) => (
        <option key={rate[0]} value={rate[0]}>
          {rate[0]}
        </option>
      ))}
    </select>
  );
};

export default ConverterSelect;
