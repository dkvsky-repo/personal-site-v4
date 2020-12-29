import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledRecommendationsWrapper = styled.section`
  h2 {
    font-size: 3rem;
    text-align: center;
  }
`;
const StyledRecommendations = styled.div`
  display: grid;
  grid-gap: var(--spacing-gutter);
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  .recommendation__item {
    background-color: #f3f4f5;
    padding: 1rem;
    border-radius: 8px;
  }
  blockquote {
    border-left: 0.25rem solid #efefef;
  }
`;

export default function Recommendations({ data }) {
  data.sort((a, b) => b.metadata.order - a.metadata.order);

  return (
    <StyledRecommendationsWrapper className='container-fluid'>
      <h2>Recommendations</h2>
      <StyledRecommendations>
        {data.map((r) => (
          <div className='recommendation__item' key={r.id}>
            <blockquote>
              <ReactMarkdown source={r.content} />
            </blockquote>
            <p>
              {r.metadata.name}, {r.metadata.work_relationship},{' '}
              {r.metadata.organization} <br />
              {r.metadata.date}. Via {r.metadata.origin}
            </p>
          </div>
        ))}
      </StyledRecommendations>
    </StyledRecommendationsWrapper>
  );
}
