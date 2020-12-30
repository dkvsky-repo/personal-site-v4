import styled from 'styled-components';

const StyledEducation = styled.section`
  background-color: #ffffff;
  border-radius: 8px;
  .education-item {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    align-items: center;
  }

  .education-logo {
    img {
      border-radius: 50%;
      max-width: 120px;
      padding: 1rem;
    }
  }

  .education-description {
    max-width: 75%;
  }
`;

export default function Education({ data }) {
  data.sort((a, b) => b.metadata.order - a.metadata.order);

  return (
    <>
      <h2>Education</h2>
      <StyledEducation>
        {data.map((ed) => (
          <div className='education-item' key={ed.id}>
            <div className='education-logo'>
              <img src={ed.metadata.logo} alt={ed.metadata.organization} />
            </div>
            <div className='education-description'>
              <p>
                {ed.metadata.date} | <strong>{ed.metadata.degree_title}</strong>{' '}
                <br />
                {ed.metadata.organization}, {ed.metadata.location}.
              </p>
            </div>
          </div>
        ))}
      </StyledEducation>
    </>
  );
}
