import { SocialNetworksProvider } from "../contexts/SocialNetworksContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <SocialNetworksProvider>
      <Component {...pageProps} />
    </SocialNetworksProvider>
  );
};

export default MyApp;
