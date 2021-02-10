import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.1s ease-in-out;
  }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
  }

  svg {
      stroke: ${({ theme }) => theme.greetingsColor};
      height: 30px;
      width: 30px;
  }
  `