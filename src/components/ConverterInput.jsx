import React from "react";

const ConverterInput = ({ value, setValue }) => {
  return <input className="search__input" name="myInput" value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default ConverterInput;
