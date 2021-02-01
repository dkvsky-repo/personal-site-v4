import Navigation from '../Navigation/Navigation';
import Meta from '../Meta';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background: white;
  padding: 0;
  height: 4rem;
`;

export default function Header() {
  return (
    <>
      <Meta />
      <StyledHeader className='container-fluid'>
        <Navigation />
      </StyledHeader>
    </>
  );
}
