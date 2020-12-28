import styled from 'styled-components';

const StyledDownloadResume = styled.a`
  width: 280px;
`;

export default function DownloadResume() {
  return (
    <StyledDownloadResume
      role='button'
      className='outline'
      href='kontorovsky_david-resume.pdf'
      target='_blank'
    >
      Résumé
    </StyledDownloadResume>
  );
}
