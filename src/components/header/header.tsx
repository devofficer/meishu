import { ConnectWallet } from "../ConnectWallet";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" alt="logo" src="assets/images/header/logo.png" />
      </div>
      <div className="nav-container">
        <span>NFT Staking</span>
        <span>Exchange</span>
        <ConnectWallet />
      </div>
    </div>
  );
};
