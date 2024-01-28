import React from "react";

const ConverterInput = ({ value, setValue }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 1000000) {
      setValue(inputValue);
    }
  };

  return <input className="inputValue" name="inputValue" type="number" value={value} onChange={handleChange} min="0" max="1000000" />;
};

export default ConverterInput;
