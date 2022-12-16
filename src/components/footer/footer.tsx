export const Footer = () => {
  return (
    <div className="py-8">
      <div className="footer-container">
        <div className="footer-logo-container">
          <div className="footer-logo-viewport">
            <img className="footer-logo" alt="logo" src="assets/images/header/logo.png" />
            <div className="h-8"></div>
            <span className="footer-item-title">Buy Meishu</span>
            <span className="footer-price">$0.15</span>
            <button className="btn btn-tools">Let's go</button>
          </div>
        </div>
        <div className="footer-item-group">
          <div className="footer-item">
            <span className="footer-item-title">Products</span>
            <div className="footer-item-link">Staking</div>
            <div className="footer-item-link">Exchange</div>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">About</span>
            <div className="footer-item-link">Team</div>
            <div className="footer-item-link">Litepaper</div>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">Commmunity</span>
            <div className="flex space-x-2">
              <img alt="telegram" src="assets/images/footer/telegram.png" />
              <img alt="telegram" src="assets/images/footer/twitter.png" />
              <img alt="telegram" src="assets/images/footer/youtube.png" />
              <img alt="telegram" src="assets/images/footer/medium.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center">MEISHU, all right reserved. 2022</div>
    </div>
    
  );
};
