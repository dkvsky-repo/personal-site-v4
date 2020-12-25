import { useContext } from 'react';
import { SocialNetworksContext } from '../../contexts/SocialNetworksContext';

export default function SocialNetworks() {
  const data = useContext(SocialNetworksContext);

  return (
    <div className='social-networks'>
      {data.networks.map((network) => (
        <a
          href={network.url}
          key={network.name}
          target='_blank'
          rel='noreferrer noopener'
        >
          {network.name}
        </a>
      ))}
    </div>
  );
}
