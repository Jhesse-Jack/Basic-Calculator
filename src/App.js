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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
          <div className="col-3">
            <button
              type="button"
              className="btn btn-light">
              +
            </button>
          </div>
          <div className="col-3">
            <button 
              type="button"
              className="btn btn-light">
                -
              </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-light">
              &times;
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-light">
              &divide;
            </button>
          </div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-3">
            <button
              type="button"
              className="btn btn-light">
              7
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-light">
              8
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-light">
              9
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
