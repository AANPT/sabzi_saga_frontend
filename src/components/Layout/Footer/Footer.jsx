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
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
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
                  <a className="" href="/">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="" href="/feedback">
                    Feedback
                  </a>
                </li>
                <li>
                  <a className="" href="/contact">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-3">
              <h5>Contact Info</h5>
              <p>
                <i class="fa-solid fa-phone"></i> ### #### ###
              </p>
              <p>
                <a href="/" id="ema">
                  <i class="fa-solid fa-envelope"></i> info_sabzi_saga@gmail.com
                </a>
              </p>
              {/* <p></p> */}
            </div>

            <div className="col-md-6 col-lg-2 col-12 ft-4">
              <h5>Payment Modes</h5>
              <div className="footer-icons" id="iconss">
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-google-pay"></i>
                <i class="fa-brands fa-cc-paypal"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
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
