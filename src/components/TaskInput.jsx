import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import colors from '../assets/themes/colors';

const StyledDiv = styled.div`
  text-align: center;
  margin: 20px auto 0 auto;
  width: 50%;
  
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.accent};
  padding: 10px 0;
  text-align: left;
  background: none;
  color: ${colors.black};
  width: 100%;
  font-size: 1.3em;

  &:active,
  &:focus {
    outline: none;
  }
`;

export default inject('taskStore')(observer((props) => {
  const { taskStore } = props;

  return (
    <StyledDiv>
      <Input
        type="text"
        placeholder="Go Shopping"
        onChange={taskStore.onChange}
        onKeyUp={taskStore.onkeyPress}
        value={taskStore.inputTask}
        autoComplete="off"
      />
    </StyledDiv>
  );
}));
