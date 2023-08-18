import "./index.css";

const Footer = () => (
  <div className="footer">
    <h1 className="footer-heading">My Sky</h1>
    <div className="bottom-section">
      <div className="left">
        <p className="text-container">A tasty destination for stargazers</p>
        <ul className="listism">
          <l className="textism">View the</l>
          <l className="textism">Explore</l>
          <l className="textism">Get expert</l>
          <l className="textism">Contact us</l>
        </ul>
      </div>
      <div className="right">
        <p className="right-text">
          Stay updated with the latest astronomical treats
        </p>
        <div className="inputism">
          <input
            type="text"
            placeholder="Enter your email address"
            className="input-box"
          />
          <button type="button" className="subscribe-button buttonism">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
