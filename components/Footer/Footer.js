import styled from 'styled-components';
import * as Helpers from '../StyledHelpers';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

const StyledFooter = styled(Helpers.FlexCenteredXY)``;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter as='footer' className='footer container-fluid'>
      <SocialNetworks />
      <p>
        Made with ❤ &nbsp;in Orange County, CA.
        <br />
        {year} &copy; David Kontorovsky.
      </p>
    </StyledFooter>
  );
}
