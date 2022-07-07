const watchEvent = async () => {
  await Moralis.start({ serverUrl, appId, masterKey });
  // code example of creating a sync event from cloud code
  let options = {
    chainId: "42",
    // UniswapV2Factory contract
    address: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
    topic: "PairCreated(address, address, address, uint256)",
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "token0",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "token1",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "pair",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "test",
          type: "uint256",
        },
      ],
      name: "PairCreated",
      type: "event",
    },
    limit: 500000,
    tableName: "UniPairCreated",
    sync_historical: false,
  };

  Moralis.Cloud.run("watchContractEvent", options, { useMasterKey: true }).then(
    (result) => {
      console.log(result);
    }
  );
};

watchEvent();
ts-node watchEvent.ts
{ success: true }
npm install @walletconnect/web3-provider
<script src="https://github.com/WalletConnect/walletconnect-monorepo/releases/download/1.7.1/web3-provider.min.js"></script>
import { useMoralis } from "react-moralis";

function App() {

    const { authenticate, isAuthenticated, user } = useMoralis();

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({ provider: "walletconnect" })
          .then(function (user) {
            console.log(user!.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
}const user = await Moralis.authenticate({ provider: "walletconnect" })
const user = await Moralis.authenticate({ provider: "walletconnect", chainId: 56 })
const user = await Moralis.authenticate({ provider: "walletconnect", chainId: 56 })
const user = await Moralis.authenticate({ 
  provider: "walletconnect", 
  mobileLinks: [
    "rainbow",
    "metamask",
    "argent",
    "trust",
    "imtoken",
    "pillar",
  ] 
})
clientId: 'ABC*****************'
<script src="https://unpkg.com/@web3auth/web3auth@latest/dist/web3auth.umd.min.js"></script>
const user = await Moralis.authenticate({
	provider: "web3Auth",
	clientId: "ABC*****************",
})
<script src="https://unpkg.com/@web3auth/web3auth@latest/dist/web3auth.umd.min.js"></script>
const user = await Moralis.authenticate({
	provider: "web3Auth",
	clientId: "ABC*****************",
})