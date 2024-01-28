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
        <select
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
        <select
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
        <input name="myInput" value={value} onChange={(e) => setValue(e.target.value)} />

        <h1>{value * firstCurrency[1] * secondCurrency[1]}</h1>

        <h2>{firstCurrency}</h2>
        <h2>{secondCurrency}</h2>
      </div>
    </>
  );
}

export default App;
