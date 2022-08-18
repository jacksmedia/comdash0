import logo from './Combased-Logo-White-Full.png';
import styled from 'styled-components';
import './App.scss';

const Title = styled.h1`
  font-size: 0.85em;
  text-align: left;
`;
const Btn = styled.button`
  padding: 1.3em;
  border-radius: 0.5rem;
  font-size: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.9em;
  align-items: center;
`;
const ThinLine = styled.hr`
  margin: 10px;
  width: 15vw;
`;
const LandingPagePanel = styled.div`
  background: navy;
  padding: 1em;
  border-radius: 0.5rem;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} className="App-logo" alt="logo" />
            <Wrapper>
              <Title>ComDash - The Web3 Swiss-army Dashboard on The Elrond Blockchain</Title>
            </Wrapper>
          </div>
          <div className="col-md-6">
            <LandingPagePanel>
              <Title>Sign In</Title>
              <Title>Wallet Aware Gateway</Title>
              <Btn>Maiar Wallet</Btn>
              <Btn>Elrond Web Wallet</Btn>
              <Btn>Ledger Hardware Wallet</Btn>
              <Wrapper>
                <ThinLine />
                <Title>Or</Title>
                <ThinLine />
              </Wrapper>
              <a
                className="App-link"
                href="https://discord.gg/nh46kvc3Fa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Don't have an Elrond Wallet? Sign Up Here
              </a>
            </LandingPagePanel>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
