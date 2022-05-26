import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{hello}</h1>
        <h1>{helloName}</h1>
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
    </div>
  );
}

export default App;

//JSX-01
const hello = <h1>Hello, World!</h1>


//JSX-02
const name = "Aida"
const helloName = <h1>Hello, {name}</h1>


/*JSX-03
What happens if the `name` variable is not passed to the function?
If the `name` variable is not passed into the fuction, it will not be displayed*/