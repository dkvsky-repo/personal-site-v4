import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledExperience = styled.section`
  .experience-item {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  .company-logo {
    img {
      border-radius: 50%;
      max-width: 180px;
      padding: 1rem;
    }
  }
  .job-description {
    max-width: 75%;
  }
  .job-title {
    font-weight: bold;
  }
`;

export default function Experience({ data }) {
  data.sort((a, b) => b.metadata.order - a.metadata.order);

  return (
    <StyledExperience>
      <h2>Experience</h2>
      {data.map((xp) => (
        <div className='experience-item' key={xp.id}>
          <div className='company-logo'>
            {xp.metadata.logo ? (
              <img src={xp.metadata.logo} alt={xp.metadata.organization} />
            ) : (
              false
            )}
          </div>
          <div className='job-description'>
            <p>
              <span className='job-title'>{xp.metadata.job_title}</span>
              <br />
              <strong>{xp.metadata.organization}</strong>,{' '}
              {xp.metadata.location} <br />
              <small>
                {xp.metadata.dateFrom}{' '}
                {xp.metadata.dateTo ? `- ${xp.metadata.dateTo}` : 'Present'}
              </small>
            </p>
            <ReactMarkdown source={xp.content} />
          </div>
        </div>
      ))}
    </StyledExperience>
  );
}
