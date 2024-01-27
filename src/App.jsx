import "./App.css";
import { mockdata } from "../mockdata";

function App() {
  if (!mockdata) {
    <div>Loading...</div>;
  }
  return (
    <>
      <div className="card">
        <select>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
        <select>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
        <input name="myInput" />
        {/* <div>{JSON.stringify(mockdata)}</div> */}

        <table>
          {Object.entries(mockdata.rates).map((rate) => (
            <tr>
              <td>{rate[0]}</td>
              <td>{rate[1]}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
