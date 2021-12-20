import logo from './logo.svg';
import './App.css';
import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h4 onClick={ Day1 }>Day1</h4>
        <h4 onClick={ Day2 }>Day2</h4>
        <h4 onClick={ Day3 }>Day3</h4>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
