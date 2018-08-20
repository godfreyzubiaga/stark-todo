import React from 'react';
import styled from 'styled-components';
import colors from '../assets/themes/colors';

const StyledDiv = styled.div`
  margin: 0;
  text-align: center;
  background: ${colors.accent};
  padding-bottom: 10px;
`;

const Title = styled.h1`
  color: ${colors.white};
  margin: 0;
`;

const SecondaryTitle = styled.div`
  color: ${colors.white};
  margin: 0;
`;

export default () => (
  <StyledDiv>
    <Title>Stark Todo</Title>
    <SecondaryTitle>A minimalistic TODO App</SecondaryTitle>
  </StyledDiv>
);
