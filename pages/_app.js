import { SocialNetworksProvider } from '../contexts/SocialNetworksContext';
import { createGlobalStyle } from 'styled-components';
import '../styles.css';

const GlobalStyle = createGlobalStyle`
// pico overwrites
:root:not([data-theme='dark']) {
  --primary: #0e7fa5;
  --primary-hover: #004d67;
}
a:focus {
  background-color: initial;
}

// Footer bottom placement
div#__next {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.footer {
  margin-top: auto;
}
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SocialNetworksProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </SocialNetworksProvider>
    </>
  );
};

export default MyApp;
