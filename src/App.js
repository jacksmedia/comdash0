import logo from './logo1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ComDash - The Web3 Swiss-army Dashboard on The Elrond Blockchain.
        </p>
        <a
          className="App-link"
          href="https://discord.gg/nh46kvc3Fa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord Community
        </a>
      </header>
    </div>
  );
}

export default App;
