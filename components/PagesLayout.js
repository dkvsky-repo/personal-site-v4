import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainWrapper = styled.div`
  margin-top: 4.125rem;
  padding-top: 4.125rem;
  margin-bottom: 4.125rem;
  background-color: #f5f5f5;
`;

export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}
