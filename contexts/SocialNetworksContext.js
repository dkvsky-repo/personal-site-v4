import React, { useState } from "react";
import data from "../utils/socialNetworksData.json";

const SocialNetworksContext = React.createContext();

const SocialNetworksProvider = (props) => {
  const [networks] = useState([...data.networks]);

  return (
    <SocialNetworksContext.Provider value={{ networks }}>
      {props.children}
    </SocialNetworksContext.Provider>
  );
};

export { SocialNetworksContext };
export { SocialNetworksProvider };
