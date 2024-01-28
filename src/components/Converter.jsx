import { useState } from "react";
import "../App.css";
import { mockdata } from "../../mockdata";
import ConverterLabel from "../components/ConverterLabel";
import ConverterSelect from "../components/ConverterSelect";
import ConverterInput from "../components/ConverterInput";
import ConverterResult from "../components/ConverterResult";

function Converter() {
  const [rates, setRates] = useState(Object.entries(mockdata.rates));
  const [firstCurrency, setFirstCurrency] = useState(["USD", 1]);
  const [secondCurrency, setSecondCurrency] = useState(["CAD", 1.345104]);
  const [value, setValue] = useState(1);

  if (!rates) {
    <div>Loading...</div>;
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
          <ConverterSelect currency={firstCurrency} setCurrency={setFirstCurrency} rates={rates} />
        </div>

        <div className="box">
          <ConverterLabel text="To" />
          <ConverterSelect currency={secondCurrency} setCurrency={setSecondCurrency} rates={rates} />
        </div>

        <div className="result">
          <ConverterResult value={value} firstCurrency={firstCurrency} secondCurrency={secondCurrency} />
        </div>

        <div className="updated_time">{mockdata.time_last_update_utc}</div>
      </div>
    </>
  );
}

export default Converter;
