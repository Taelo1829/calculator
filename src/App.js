import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="calculator">
      <div className="calculator-container">
        <div className="calculator-screen">
          <div className="blinking-cursor">|</div>
          <div>{value}</div>
        </div>
        <div className="calculator-body">
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
                -<div></div>
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
                <div className="button">1</div>
                <div className="button">2</div>
                <div className="button">3</div>
              </div>
              <div className="row">
                <div className="button">%</div>
                <div className="button">0</div>
                <div className="button">.</div>
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
