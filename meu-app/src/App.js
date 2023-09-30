import logo from './teste.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Teste com React. Clique no link abaixo.
        </p>
        <a
          className="App-link"
          href="https://github.com/miguelzynich"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub @miguelzynich
        </a>
      </header>
    </div>
  );
}

export default App;
