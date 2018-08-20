import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import colors from '../assets/themes/colors';

const StyledDiv = styled.div`
  margin: 20px auto 0 auto;
  width: 70%;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const TaskContainer = styled.div`
  height: 20px;
  color: ${colors.black};
  margin: 10px 0;
  font-size: 1.1em;
  padding: 5px;
  transition-duration: 0.3s;
  cursor: pointer;
  text-decoration: ${props => (props.finished ? 'line-through' : 'none')};
  text-decoration-style: ${props => (props.finished ? 'double' : 'none')};
  letter-spacing: 2px;

  &:hover, &:focus {
    transition-duration: 0.3s;
    background: ${colors.darkWhite};
  }
`;

export default inject('taskStore')(
  observer((props) => {
    const { taskStore } = props;
    const { tasks } = taskStore;
    return (
      <StyledDiv>
        {tasks.map(task => (
          <TaskContainer
            onClick={() => taskStore.toggleFinished(task.id)}
            finished={task.finished}
            key={task.id}
          >
            {task.task}
          </TaskContainer>
        ))}
      </StyledDiv>
    );
  }),
);
