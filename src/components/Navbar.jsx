import React, { useEffect, useState } from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
`;

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav className="nav" scrollNav={scrollNav}>
        <div className="navContainer">
          <LinkR to="/" className="logo" onClick={toggleHome}>
            dolla
          </LinkR>

          <div className="mobileIcon" onClick={toggle}>
            <FaBars />
          </div>

          <ul className="navMenu">
            <li className="navItem">
              <LinkS
                className="link"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                exact="true"
              >
                About
              </LinkS>
              <LinkS
                className="link"
                to="discover"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                exact="true"
              >
                Discover
              </LinkS>
              <LinkS
                className="link"
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                exact="true"
              >
                Services
              </LinkS>
              <LinkS
                className="link"
                to="signup"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                exact="true"
              >
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
      </Nav>
    </>
  );
};
