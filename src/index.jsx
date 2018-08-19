import React from 'react';
import { render } from 'react-dom';
import App from './App';
import globalTheme from './assets/themes/globalTheme';

const mountPoint = document.getElementById('root');

globalTheme();

render(<App />, mountPoint);
