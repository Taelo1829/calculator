import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState("");

  function updateCalculations(val) {
    switch (val) {
      case "%":
        if (value !== "" && total !== "") {
          setValue((prevValue) => prevValue + val);
          console.log(total);
          setTotal((prevValue) => (prevValue / 100).toFixed(2));
        } else {
          setValue(val);
          setTotal("Error");
        }
        break;
      default:
        if (value !== "" && total !== "") {
          setTotal(eval(value + val));
          setValue((prevValue) => prevValue + val);
        } else {
          setValue(val);
          setTotal(val);
        }
    }
  }

  return (
    <div className="calculator">
      <div className="calculator-container">
        <div className="calculator-screen">
          <div className="value">
            <div>{value}</div>
            <div className="blinking-cursor">|</div>
          </div>
          <div>{total}</div>
        </div>
        <div className="calculator-body">
          <div className="bottomRow">
            <div>
              <div className="row">
                <div className="button">MC</div>
                <div className="button">M+</div>
                <div className="button">M-</div>
              </div>
            </div>
            <div className="operations">
              <div className="button">MR</div>
            </div>
          </div>
          <div className="bottomRow">
            <div>
              <div className="row">
                <div className="button">C</div>
                <div className="button">
                  <img src="/images/divide.png" width={40} />
                </div>
                <div className="button">X</div>
              </div>
            </div>
            <div className="operations">
              <div className="button">
                <img src="/images/backspace.png" />
              </div>
            </div>
          </div>
          <div className="bottomRow">
            <div>
              <div className="row">
                <div className="button">7</div>
                <div className="button">8</div>
                <div className="button">9</div>
              </div>
            </div>
            <div className="operations">
              <div className="button">
                -<div></div>
              </div>
            </div>
          </div>
          <div className="bottomRow">
            <div>
              <div className="row">
                <div className="button">4</div>
                <div className="button">5</div>
                <div className="button">6</div>
              </div>
            </div>
            <div className="operations">
              <div className="button">+</div>
            </div>
          </div>
          <div className="bottomRow">
            <div>
              <div className="row">
                <div className="button" onClick={() => updateCalculations("1")}>
                  1
                </div>
                <div className="button">2</div>
                <div className="button">3</div>
              </div>
              <div className="row">
                <div className="button" onClick={() => updateCalculations("%")}>
                  %
                </div>
                <div className="button" onClick={() => updateCalculations("0")}>
                  0
                </div>
                <div className="button" onClick={() => updateCalculations(".")}>
                  .
                </div>
              </div>
            </div>
            <div className="equal-sign">=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
