import { Web3Button } from "@web3modal/react";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img alt="logo" src="assets/images/header/logo.png" />
      </div>
      <div className="nav-container">
        <span>NFT Staking</span>
        <span>Exchange</span>
        <Web3Button />
      </div>
    </div>
  );
};
