import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Landing } from "./pages/landing";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { bsc, mainnet, polygon } from "wagmi/chains";

const chains = [bsc, mainnet, polygon];

const id = process.env.REACT_APP_PROJECT_ID;

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "2dbfb6763e5b0540870863bf2f024cd0" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <div className="viewport">
      <WagmiConfig client={wagmiClient}>
        <Header />
        <Landing />
        <Footer />
      </WagmiConfig>
      <Web3Modal
        projectId="2dbfb6763e5b0540870863bf2f024cd0"
        ethereumClient={ethereumClient}
        themeColor="purple"
      />
    </div>
    
  );
}

export default App;
