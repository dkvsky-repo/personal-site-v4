import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { FlexCenteredXY } from '../StyledHelpers';
import DownloadResume from '../Resume/DownloadResume';

const HeroWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: -1rem;
  margin-right: -1rem;

  @media (max-width: 1024px) {
    background-image: url('./images/hero-1024w.jpeg');
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    background-image: url('./images/hero-1920w.jpeg');
  }

  @media (min-width: 1441px) {
    background-image: url('./images/hero-3840w.jpeg');
  }
`;
const StyledHero = styled(FlexCenteredXY)`
  width: 100%;
  padding: 2.8rem;
  .avatar {
    padding: 8px;
    margin-bottom: 8px;
    img {
      border-radius: 50%;
      width: 280px;
    }
  }
  .headline {
    text-align: center;
    h3 {
      font-size: 1.4rem;
      font-weight: bold;
    }
    &__primary p {
      font-size: 4rem;
      font-weight: bold;
      color: #ffc839;
      margin-bottom: 0.8rem;
    }
    &__secondary {
      margin-bottom: 8px;
      color: #6bb8c9;
    }
    &__support {
      color: #a0c96b;
    }
  }
`;

export default function Hero({
  avatar,
  mainHeadline,
  secondaryHeadline,
  supportHeadline,
}) {
  return (
    <>
      <HeroWrapper>
        <StyledHero>
          <div className='avatar'>
            <img src={avatar} alt='David Kontorovsky' />
          </div>
          <div className='headline'>
            <ReactMarkdown
              className='headline__primary'
              source={mainHeadline}
            />
            <h3 className='headline__secondary'>{secondaryHeadline}</h3>
            <p className='headline__support'>{supportHeadline}</p>
          </div>
          <DownloadResume />
        </StyledHero>
      </HeroWrapper>
    </>
  );
}
