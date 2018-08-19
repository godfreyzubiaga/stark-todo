import { injectGlobal } from 'styled-components';
import colors from './colors';

export default () => injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'PT Sans Narrow', sans-serif;
    background: ${colors.white};
    color: ${colors.black};
    letter-spacing: 2px;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 10px 5px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
  }
`;
