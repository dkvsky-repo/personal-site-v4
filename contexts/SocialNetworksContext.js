import React from 'react';
import data from '../utils/socialNetworksData.json';

const SocialNetworksContext = React.createContext();

const SocialNetworksProvider = (props) => {
  return (
    <SocialNetworksContext.Provider value={data}>
      {props.children}
    </SocialNetworksContext.Provider>
  );
};

export { SocialNetworksContext };
export { SocialNetworksProvider };
