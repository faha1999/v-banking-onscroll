import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/globalStyle';

const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
`;

export const Info = () => {
  return (
    <>
      <InfoContainer className="infoContainer">
        <div className="wrapper">
          <div className="row">
            <div className="column1">
              <div className="text">
                <div className="topLine">TopLine</div>
                <div className="heading">Heading</div>
                <div className="subtitle">subtitle</div>
                <div className="btn">
                  <Button className="button" to="home">
                    Button
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InfoContainer>
    </>
  );
};
