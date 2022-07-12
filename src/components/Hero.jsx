import React, { useState } from 'react';
import styled from 'styled-components';
import HeroVideo from '../assets/video/faha1999.mp4';
import { Button } from './styles/globalStyle';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="hero" id="home">
      <div className="heroBg">
        <video src={HeroVideo} autoPlay loop muted />
      </div>

      <div className="content">
        <h1>Virtual banking made easy</h1>
        <p>
          Sign up for a new a new account and receive $250 in credit towards you
          next payment.
        </p>

        <div className="heroBtn">
          <Button
            className="button"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </div>
      </div>
    </div>
  );
};
