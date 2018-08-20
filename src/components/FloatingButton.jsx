import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';

const StyledDiv = styled.div`
  position: fixed;
  bottom: 20px;
  right: ${props => props.right};
  height: 50px;
  width: 50px;
  diplay: inline-block;
  background: ${props => props.bgColor} url(${props => props.background});
  background-size: 50% 50%;
  background-style: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  transition-duration: 0.3s;
  cursor: pointer;
  border: 2px solid ${props => props.borderColor};

  &:hover,
  &:active {
    transition-duration: 0.3s;
    background-color: ${props => props.hoverBG};
  }
`;

const FloatingButton = ({
  right, bgColor, background, borderColor, hoverBG, action,
}) => {
  const props = {
    right,
    bgColor,
    background,
    borderColor,
    hoverBG,
  };
  return <StyledDiv {...props} onClick={() => action()} />;
};

FloatingButton.propTypes = {
  right: string.isRequired,
  bgColor: string.isRequired,
  background: string.isRequired,
  borderColor: string.isRequired,
  hoverBG: string.isRequired,
  action: func.isRequired,
};
export default FloatingButton;
