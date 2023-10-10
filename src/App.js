import logo from './logo.svg';
import './App.css';
import './Components/styles.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to (HRM app)!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login/Register
        </a>
      </header>
    </div>
  );
}

export default App;
