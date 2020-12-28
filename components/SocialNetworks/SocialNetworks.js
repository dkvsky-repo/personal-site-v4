import React, { useContext } from 'react';
import { SocialNetworksContext } from '../../contexts/SocialNetworksContext';
import styled from 'styled-components';
import MicIcon from '@material-ui/icons/Mic';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialLinksWrapper = styled.div`
  margin-bottom: 16px;
`;
const SocialLinks = styled.a`
  padding: 0 0.5rem;

  &:hover {
    text-decoration: none;
  }
`;

export default function SocialNetworks() {
  const data = useContext(SocialNetworksContext);

  const getIcon = (name) => {
    switch (name) {
      case 'LinkedIn':
        return <LinkedInIcon />;
      case 'GitHub':
        return <GitHubIcon />;
      case 'Twitter':
        return <TwitterIcon />;
      case 'Instagram':
        return <InstagramIcon />;
      case 'YouTube':
        return <YouTubeIcon />;
      case 'Anchor':
        return <MicIcon />;
      default:
        return name;
    }
  };

  return (
    <SocialLinksWrapper>
      {data.socialLinks.map((link) => (
        <SocialLinks
          href={link.url}
          key={link.name}
          target='_blank'
          rel='noreferrer noopener'
        >
          {getIcon(link.name)}
        </SocialLinks>
      ))}
    </SocialLinksWrapper>
  );
}
