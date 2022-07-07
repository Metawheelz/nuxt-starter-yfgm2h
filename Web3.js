<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
npm install moralis react-moralis
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://xxxxx/server" appId="YOUR_APP_ID">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
useMoralis
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";

function App() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user!.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

  return (
    <div>
      <h1>Moralis Hello World!</h1>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
    </div>
  );
}

export default App;
npm start
<script 
// Get a (ethers.js) web3Provider
const web3Provider = await Moralis.enableWeb3();
src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
npm install web3
yarn add web3
dist/web3.min.js
window.ethereum.
dist/web3.min.js
Web3.givenProvider
// In Node.js use: const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
web3.eth.sendTransaction
web3.eth.sendTransaction({from: '0x123...', data: '0x432...'})
.once('sending', function(payload){ ... })
.once('sent', function(payload){ ... })
.once('transactionHash', function(hash){ ... })
.once('receipt', function(receipt){ ... })
.on('confirmation', function(confNumber, receipt, latestBlockHash){ ... })
.on('error', function(error){ ... })
.then(function(receipt){
    // will be fired once the receipt is mined
});
var Contract = require('web3-eth-contract');

// set provider for all later instances to use
Contract.setProvider('ws://localhost:8546');

var contract = new Contract(jsonInterface, address);

contract.methods.somFunc().send({from: ....})
.on('receipt', function(){
    ...
});
new web3.eth.Contract(jsonInterface[, address][, options])
npm install web3
var Eth = require('web3-eth');

// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
var eth = new Eth(Eth.givenProvider || 'ws://some.local-or-remote.node:8546');


// or using the web3 umbrella package

var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

// -> web3.eth
Moralis.authenticate()
Moralis.authenticate().then(function (user) {
  console.log(user.get('ethAddress'))
})
Moralis.authenticate({signingMessage:"My custom message"})
Moralis.authenticate({type: "sol"})
