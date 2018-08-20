import React from 'react';
import { inject, observer } from 'mobx-react';
import TitleBar from './components/TitleBar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FloatingButton from './components/FloatingButton';
import eraser from './assets/images/eraser';
import colors from './assets/themes/colors';
import reset from './assets/images/reset';

export default inject('taskStore')(
  observer((props) => {
    const { taskStore } = props;
    return (
      <div>
        <TitleBar />
        <TaskInput />
        <TaskList />
        <FloatingButton
          background={eraser}
          bgColor={colors.accent}
          hoverBG={colors.darkAccent}
          borderColor={colors.accent}
          right="90px"
          action={() => taskStore.clearFinishedItems()}
        />
        <FloatingButton
          background={reset}
          hoverBG={colors.darkWhite}
          bgColor={colors.white}
          borderColor={colors.accent}
          right="20px"
          action={() => taskStore.resetTODO()}
        />
      </div>
    );
  }),
);
