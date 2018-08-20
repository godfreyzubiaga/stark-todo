import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import globalTheme from './assets/themes/globalTheme';
import RootStore from './stores/RootStore';

const mountPoint = document.getElementById('root');
const store = new RootStore();

globalTheme();

render(
  <Provider {...store}>
    <App />
  </Provider>,
  mountPoint,
);
