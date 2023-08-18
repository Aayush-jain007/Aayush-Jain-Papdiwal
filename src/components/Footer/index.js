import { Component } from "react";
import "./index.css";

class Footer extends Component {
  state = { emailId: "" };

  handleEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ emailId: email });
  };

  handleSubmitButton = () => {
    this.setState({ emailId: "" });
  };

  render() {
    const { emailId } = this.state;

    return (
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
                onChange={this.handleEmailChange}
                value={emailId}
              />
              <button
                type="button"
                className="subscribe-button buttonism"
                onClick={this.handleSubmitButton}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
