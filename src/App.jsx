import { useState } from "react";
import "./App.css";
import { mockdata } from "../mockdata";

function App() {
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
          <div className="label">Amount</div>
          <input className="search__input" name="myInput" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>

        <div className="box">
          <div className="label">From</div>
          <select
            className="select"
            value={firstCurrency[0]}
            onChange={(e) => {
              let selectedCurrency = e.target.value;
              const selectedRate = rates.find((rate) => rate[0] === selectedCurrency)[1];
              setFirstCurrency([selectedCurrency, selectedRate]);
            }}
          >
            {rates.map((rate) => (
              <option key={rate[0]} value={rate[0]}>
                {rate[0]}
              </option>
            ))}
          </select>
        </div>

        <div className="box">
          <div className="label">To</div>
          <select
            className="select"
            value={secondCurrency[0]}
            onChange={(e) => {
              let selectedCurrency = e.target.value;
              const selectedRate = rates.find((rate) => rate[0] === selectedCurrency)[1];
              setSecondCurrency([selectedCurrency, selectedRate]);
            }}
          >
            {rates.map((rate) => (
              <option key={rate[0]} value={rate[0]}>
                {rate[0]}
              </option>
            ))}
          </select>
        </div>

        <div className="result">
          {(value * firstCurrency[1] * secondCurrency[1]).toFixed(2)} {secondCurrency[0]}{" "}
        </div>

        <div className="updated_time">{mockdata.time_last_update_utc}</div>
        {/* <h2>{firstCurrency}</h2>
        <h2>{secondCurrency}</h2> */}
      </div>
    </>
  );
}

export default App;
