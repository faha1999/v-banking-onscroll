import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="linksContainer">
          <div className="linksWrapper">
            <div className="linksItem">
              <h1 className="linkTitle">About us</h1>
              <Link className="link" to="./signin">
                How it works
              </Link>
              <Link className="link" to="./signin">
                Testimonials
              </Link>
              <Link className="link" to="./signin">
                Careers
              </Link>
              <Link className="link" to="./signin">
                Investor
              </Link>
              <Link className="link" to="./signin">
                Terms of Services
              </Link>
            </div>

            <div className="linksItem">
              <h1 className="linkTitle">Contact us</h1>
              <Link className="link" to="./signin">
                Contact
              </Link>
              <Link className="link" to="./signin">
                Support
              </Link>
              <Link className="link" to="./signin">
                Destination
              </Link>
              <Link className="link" to="./signin">
                Sponsorship
              </Link>
            </div>
          </div>

          <div className="linksWrapper">
            <div className="linksItem">
              <h1 className="linkTitle">Videos</h1>
              <Link className="link" to="./signin">
                Submit Videos
              </Link>
              <Link className="link" to="./signin">
                Ambassadors
              </Link>
              <Link className="link" to="./signin">
                Agency
              </Link>
              <Link className="link" to="./signin">
                Influencer
              </Link>
            </div>

            <div className="linksItem">
              <h1 className="linkTitle">Social Media</h1>
              <Link className="link" to="./signin">
                Instagram
              </Link>
              <Link className="link" to="./signin">
                Facebook
              </Link>
              <Link className="link" to="./signin">
                Youtube
              </Link>
              <Link className="link" to="./signin">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <div className="socialMedia">
          <div className="mediaWrap">
            <Link to="/" className="logo">
              dolla
            </Link>
            <small className="rights">
              dolla {new Date().getFullYear()} All rights reserved.
            </small>

            <div className="icons">
              <a
                className="iconLink"
                href="/"
                target="_blank"
                aria-label="facebook"
              >
                <FaFacebook />
              </a>

              <a
                className="iconLink"
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className="iconLink"
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>

              <a
                className="iconLink"
                href="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              <a
                className="iconLink"
                href="/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
