import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

const SidebarContainer = styled.aside`
  top: 0;
  //   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  //   top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`;

export const Sidebar = () => {
  return (
    <SidebarContainer className="SidebarContainer">
      <div className="icon">
        <FaTimes className="closeIcon" />
      </div>

      <div className="wrapper">
        <ul className="menu">
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
        </ul>

        <div className="sideBtnWrap">
          <LinkR className="sideBarRoute" to="/signin">
            Sign In
          </LinkR>
        </div>
      </div>
    </SidebarContainer>
  );
};
