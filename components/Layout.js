import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainWrapper = styled.main`
  margin-top: 4.125rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainWrapper className='container-fluid'>{children}</MainWrapper>
      <Footer />
    </>
  );
}
