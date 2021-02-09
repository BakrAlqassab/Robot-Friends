import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* come from install tachyons and import it on index.js */}
        <p className="f1 tc">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="">
          Learn React dddd
        </a>
      </header>
      <h1> {props.greeting}</h1>
      <h1> {props.dog}</h1>
    </div>
  );
}

export default App;
