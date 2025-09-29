import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subsciption-heading">
          Join the Adventure new letter to receive our best vacation deals
        </p>
        <p className="footer-subsciption-text">
          You can unsubscibe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Term of services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destination</Link>
            <Link to="/">Spornsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Likedin</Link>
          </div>
        </div>
      </div>
      <div className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-media">
              TRVL <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">TRVL 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
