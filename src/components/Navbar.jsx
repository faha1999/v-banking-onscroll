import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

export const Navbar = ({ toggle }) => {
  return (
    <>
      <nav>
        <div className="navContainer">
          <LinkR to="/" className="logo">
            dolla
          </LinkR>

          <div className="mobileIcon" onClick={toggle}>
            <FaBars />
          </div>

          <ul className="navMenu">
            <li className="navItem">
              <LinkS className="link" to="about">
                About
              </LinkS>
              <LinkS className="link" to="discover">
                Discover
              </LinkS>
              <LinkS className="link" to="services">
                Services
              </LinkS>
              <LinkS className="link" to="signup">
                Sign Up
              </LinkS>
            </li>
          </ul>

          <div className="navBtn">
            <LinkR className="btn" to="/signin">
              Sign In
            </LinkR>
          </div>
        </div>
      </nav>
    </>
  );
};
