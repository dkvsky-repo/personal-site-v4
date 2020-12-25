import Navigation from '../Navigation/Navigation';
import Meta from '../Meta';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background: white;
  /* box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.09); */
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
