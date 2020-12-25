import { SocialNetworksProvider } from '../contexts/SocialNetworksContext';
import { createGlobalStyle } from 'styled-components';
import '../styles.css';

const GlobalStyle = createGlobalStyle`
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
