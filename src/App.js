import logo from './OS_logo_500x500.png';
import './App.css';
import { ConnectWallet } from '@3rdweb/react';
import { useWeb3 } from "@3rdweb/hooks";

const App = ({ children }) => {

  const {address, chainId, provider } = useWeb3();


  return (
        <div className="App">
          <header className="App-header">
          <ConnectWallet />
          <h1 className="text-3xl">      Hello and welcome to Open Show!    </h1>
            Address: {address}
            <br />
            ChainId: {chainId}
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
  );
}

export default App;
