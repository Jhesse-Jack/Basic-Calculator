import './App.css';
import React from 'react';
import './bootstrap.min.css';

function App() {
  let [nums, setNums] = React.useState()
  function handleInput(e){
    setNums(e.target.value)
    console.log(nums)
  }
  return (
    <div className="App App-header">
      <div className="calc-container">
        <div className="row">
          <input 
            type="text"
            className="form-control"
            onInput = {handleInput} 
            value = {nums}
            placeholder = "0" 
            readOnly />
        </div>
        <div className="row">
          <div className="calc-button col-3">
            <button
              className="btn btn-primary">
              +
            </button>
          </div>
          <div className="calc-button col-3">
            <button 
              className="btn btn-primary">
                -
              </button>
          </div>
          <div className="calc-button col-3">
            <button
              className="btn btn-primary">
              &times;
            </button>
          </div>
          <div className="calc-button col-3">
            <button
              className="btn btn-primary">
              &divide;
            </button>
          </div>
        </div>
        <p></p>
          <div className="row">
            <div className="calc-button col-3">
              <button
                className="btn btn-light">
                7
              </button>
              <p></p>
              <button className="btn btn-light">
                4
              </button>
            </div>
            <div className="calc-button col-3">
              <button
                className="btn btn-light">
                8
              </button>
              <p></p>
              <button className="btn btn-light">
                5
              </button>
            </div>
            <div className="calc-button col-3">
              <button
                className="btn btn-light">
                9
              </button>
              <p></p>
              <button className="btn btn-light">
                6
              </button>
            </div>
            <div className="calc-button col-3">
              <button
                className="btn btn-primary ACbtn">
                AC
              </button>
            </div>
          </div>
        <p></p>
        <div className="row">
          <div className="calc-button0 col-6">
            <div className="row">
              <button className="btn btn-light oneandtwo">
                1
              </button>
              <br />
              <button className="btn btn-light oneandtwo">
                2
              </button>
            </div>
            <p></p>
            <div className="row">
              <button className="col-9 btn btn-light">
                0
              </button>
            </div>
            <p></p>
          </div>
          <div className="calc-button col-3">
            <button className="btn btn-light">
              3
            </button>
            <p></p>
            <button className="btn btn-light">
              .
            </button>
          </div>
          <div className="calc-button col-3">
            <button className="btn btn-primary ACbtn">
              =
            </button>
          </div>
        </div>
        <div className="row">
          <div className="calc-button-dot col-3">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
