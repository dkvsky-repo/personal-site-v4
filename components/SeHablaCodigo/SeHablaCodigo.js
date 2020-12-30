import styled from 'styled-components';
import { FlexCenteredXY } from '../StyledHelpers';

const StyledSeHablaCodigo = styled(FlexCenteredXY)`
  background-color: #0c0c0c;
  padding-bottom: 4.125rem;
  h2 {
    color: #ffc839;
    text-align: center;
    font-size: 3rem;
    padding-top: 3rem;
  }
  h3 {
    color: #ff4500;
  }
  h4 {
    text-align: center;
  }
  p {
    color: #8a99a3;
  }
  img {
    margin-bottom: 2rem;
    width: 480px;
  }
  .podcast,
  .youtube {
    background-color: #191919;
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 1rem;
  }
`;

export default function SeHablaCodigo() {
  return (
    <>
      <StyledSeHablaCodigo as='section' className='container-fluid'>
        <div className='container'>
          <h2>Se Habla Código&#8482;</h2>
          <h4>
            I produce and host "Se Habla Código", a podcast and YouTube channel
            focused on web development, to promote knowledge sharing within the
            Spanish-speaking dev community.
          </h4>
        </div>
        <div className='grid'>
          <div className='podcast'>
            <h3>Podcast</h3>
            <img
              src='images/podcast-screenshot.png'
              alt='Se Habla Codigo - Podcast'
            />
            <p>
              The podcast is available in most popular platforms, like Spotify,
              Apple podcasts, Google podcasts, and others. Also available on the
              web through our{' '}
              <a href='https://anchor.fm/sehablacodigo' target='_blank'>
                Anchor
              </a>{' '}
              page.
            </p>
          </div>
          <div className='youtube'>
            <h3>YouTube</h3>
            <img
              src='images/youtube-screenshot.png'
              alt='Se Habla Codigo - YouTube'
            />
            <p>
              The video format allows us to dig deeper into topics we cannot
              expand on our podcast. In our{' '}
              <a
                href='https://www.youtube.com/channel/UCM7c4hwn-BZT67chRgpkCNg'
                target='_blank'
              >
                YouTube channel
              </a>{' '}
              I am able to share examples, presentations, tutorials and more.
            </p>
          </div>
        </div>
      </StyledSeHablaCodigo>
    </>
  );
}
