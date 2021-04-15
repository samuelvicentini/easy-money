import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

:root {
  --white: #fff;

  --Gray-50:#F7FAFC;
  --Gray-100:#EDF2F7;
  --Gray-200:#E2E8F0;
  --Gray-300:#CBD5E0;
  --Gray-400:#A0AEC0;
  --Gray-500:#718096;
  --Gray-600:#4A5568;
  --Gray-700:#2D3748;
  --Gray-800:#1A202C;
  --Gray-900:#171923;
}


body {
  background: var(--Gray-50);
  color: var(--Gray-900);
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: Roboto, sans-serif;
  font: 400 1rem;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
