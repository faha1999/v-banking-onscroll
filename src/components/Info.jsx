import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/globalStyle';

const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
`;

const Row = styled.div`
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Heading = styled.h1`
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
`;

const SubTitle = styled.p`
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

const Column1 = styled.div`
  grid-area: col1;
`;

const Column2 = styled.div`
  grid-area: col2;
`;

export const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer className="infoContainer" lightBg={lightBg} id={id}>
        <div className="wrapper">
          <Row className="row" imgStart={imgStart}>
            <Column1 className="column1">
              <div className="text">
                <p className="topLine">{topLine}</p>
                <Heading className="heading" lightText={lightText}>
                  {headline}
                </Heading>
                <SubTitle className="subtitle" darkText={darkText}>
                  {description}
                </SubTitle>
                <div className="btn">
                  <Button
                    className="button"
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </div>
              </div>
            </Column1>

            <Column2 className="column2">
              <div className="imgWarp">
                <img src={img} alt={alt} />
              </div>
            </Column2>
          </Row>
        </div>
      </InfoContainer>
    </>
  );
};
