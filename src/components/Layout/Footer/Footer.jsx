import React from "react";
import "./Foot.css";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12 ft-1">
              <h3>
                <span>Sabzi</span>Saga
              </h3>
              <p>Sabzi Le Lo!!!</p>
              <div className="footer-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a className="" href="/aboutus">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="" href="/feedback">
                    Feedback
                  </a>
                </li>
                <li>
                  <a className="" href="/contact">
                    contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-3">
              <h5>Contact Info</h5>
              <p>
                <i className="fa-solid fa-phone"></i> 9345313242
              </p>
              <p>
                <a href="/" id="ema">
                  <i className="fa-solid fa-envelope"></i> sabzisaga5@gmail.com
                </a>
              </p>
              {/* <p></p> */}
            </div>

            <div className="col-md-6 col-lg-2 col-12 ft-4">
              <h5>Payment Modes</h5>
              <div className="footer-icons" id="iconss">
                <i className="fa-brands fa-cc-visa"></i>
                <i className="fa-brands fa-google-pay"></i>
                <i className="fa-brands fa-cc-paypal"></i>
                <i className="fa-brands fa-cc-mastercard"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>Created By FULL STACKERS</p>
      </div>
    </>
  );
};

export default Footer;
