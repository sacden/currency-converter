import React from "react";

const ConverterResult = ({ value, firstCurrency, secondCurrency }) => {
  return (
    <>
      {(value * firstCurrency[1] * secondCurrency[1]).toFixed(2)} {secondCurrency[0]}
    </>
  );
};

export default ConverterResult;
