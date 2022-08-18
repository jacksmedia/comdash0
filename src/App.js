import logo from './Combased-Logo-White-Full.png';
import styled from 'styled-components';
import './App.scss';

const Title = styled.h1`
  font-size: 0.85em;
  text-align: left;
`;

const Wrapper = styled.section`
  padding: 0.9em;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header container-sm p-3">
        <img src={logo} className="App-logo" alt="logo" />
        <Wrapper>
          <Title>ComDash - The Web3 Swiss-army Dashboard on The Elrond Blockchain</Title>
        </Wrapper>
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
