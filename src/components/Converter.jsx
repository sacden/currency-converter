import { useState, useEffect } from "react";
import ConverterLabel from "../components/ConverterLabel";
import ConverterSelect from "../components/ConverterSelect";
import ConverterInput from "../components/ConverterInput";
import ConverterResult from "../components/ConverterResult";
import useCurrencyRates from "../hooks/useCurrencyRates";
import { API_URL } from "../constants/common";

function Converter() {
  const [exchangeRate, setExchangeRate] = useState(1);
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("CZK");
  const [value, setValue] = useState(1);
  const [result, setResult] = useState(null);

  const { rates, loading, error } = useCurrencyRates(API_URL, firstCurrency);

  //updates currency rate
  useEffect(() => {
    if (rates.length > 0) {
      const rate = rates.find(([currencyCode]) => currencyCode === secondCurrency)[1];
      setExchangeRate(rate);
    }
  }, [firstCurrency, secondCurrency, rates]);

  //updates result of conversion
  useEffect(() => {
    setResult((value * exchangeRate).toFixed(2));
  }, [value, exchangeRate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="card">
        <div className="title">CURRENCY CONVERTER</div>

        <div className="box">
          <ConverterLabel text="Amount" />
          <ConverterInput value={value} setValue={setValue} />
        </div>

        <div className="box">
          <ConverterLabel text="From" />
          <ConverterSelect currency={firstCurrency} setCurrency={setFirstCurrency} rates={rates} setExchangeRate={setExchangeRate} />
        </div>

        <div className="box">
          <ConverterLabel text="To" />
          <ConverterSelect currency={secondCurrency} setCurrency={setSecondCurrency} rates={rates} />
        </div>

        <div className="result">
          <ConverterResult value={value} firstCurrency={firstCurrency} secondCurrency={secondCurrency} result={result} />
        </div>
      </div>
    </>
  );
}

export default Converter;
