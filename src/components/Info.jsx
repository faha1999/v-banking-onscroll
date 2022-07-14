import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/globalStyle';

const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
`;

const Row = styled.div`
  grid-template-columns: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-columns: ${({ imgStart }) =>
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
  grid-area: cal1;
`;

const Column2 = styled.div`
  grid-area: cal2;
`;

export const Info = () => {
  return (
    <>
      <InfoContainer className="infoContainer">
        <div className="wrapper">
          <Row className="row">
            <Column1 className="column1">
              <div className="text">
                <p className="topLine">TopLine</p>
                <Heading className="heading">Heading</Heading>
                <SubTitle className="subtitle">subtitle</SubTitle>
                <div className="btn">
                  <Button className="button" to="home">
                    Button
                  </Button>
                </div>
              </div>
            </Column1>

            <Column2 className="column2">
              <div className="imgWrap">
                <img src="" alt="" />
              </div>
            </Column2>
          </Row>
        </div>
      </InfoContainer>
    </>
  );
};
