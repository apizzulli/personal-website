import logo from './logo.svg';
import './App.css';
import Body from './Body.js'

function App() {
  return (
    <div className="App">
      <div class="app-banner">Anthony J Pizzulli</div>
      <header className="App-header">
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
      </header>
    <Body></Body>
    </div>
  );
}

export default App;
