import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider } from '@3rdweb/react';

const supportedChainIds = [1, 4, 137];

  const connectors = {
    injected: {},
    magic: {
      apiKey: "theapikey",
      chainId: 1
    },
    walletconnect: {},
    walletlink: {
      appName: "open show",
      url: "https://open-show.io",
      darkMode: false,
    },
  };

ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
