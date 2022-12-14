export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <span className="text-[#141414] font-bold">.</span>
        <div className="footer-line">
          <span className="footer-line-title">Max Supply</span>
          <span className="footer-line-content">10000000000</span>
        </div>
        <div className="footer-line">
          <span className="footer-line-title">Total Supply</span>
          <span className="footer-line-content">10000000000</span>
        </div>
        <div className="footer-line">
          <span className="footer-line-title">Circulating Supply</span>
          <span className="footer-line-content">10000000000</span>
        </div>
        <div className="footer-line">
          <span className="footer-line-title">Total Burned</span>
          <span className="footer-line-content">10000000000</span>
        </div>
        <div className="footer-line">
          <span className="footer-line-title">Market Cap</span>
          <span className="footer-line-content">10000000000</span>
        </div>
      </div>
      <div className="footer-item">
        <span className="footer-line-content font-bold">Products</span>
        <div className="footer-line-title">Staking</div>
        <div className="footer-line-title">Exchange</div>
      </div>
      <div className="footer-item">
        <span className="footer-line-content font-bold">About</span>
        <div className="footer-line-title">Team</div>
        <div className="footer-line-title">Litepaper</div>
      </div>
    </div>
  );
};
