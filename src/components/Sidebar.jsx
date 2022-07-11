import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

const SidebarContainer = styled.aside`
  top: 0;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`;

export const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer
      className="SidebarContainer"
      isOpen={isOpen}
      onClick={toggle}
    >
      <div className="icon" onClick={toggle}>
        <FaTimes className="closeIcon" />
      </div>

      <div className="wrapper">
        <ul className="menu">
          <LinkS onClick={toggle} className="link" to="about">
            About
          </LinkS>
          <LinkS onClick={toggle} className="link" to="discover">
            Discover
          </LinkS>
          <LinkS onClick={toggle} className="link" to="services">
            Services
          </LinkS>
          <LinkS onClick={toggle} className="link" to="signup">
            Sign Up
          </LinkS>
        </ul>

        <div className="sideBtnWrap">
          <LinkR onClick={toggle} className="sideBarRoute" to="/signin">
            Sign In
          </LinkR>
        </div>
      </div>
    </SidebarContainer>
  );
};
