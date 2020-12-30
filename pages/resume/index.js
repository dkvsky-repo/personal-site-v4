import PagesLayout from '../../components/PagesLayout';
import styled from 'styled-components';
import { getData } from '../../utils/markdown-importer/markdownImporter';
import { EXPERIENCES, EDUCATIONS } from '../../constants';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';
import DownloadResume from '../../components/DownloadResume/DownloadResume';
import { RESUME_PDF_FILE } from '../../constants';

const DownloadResumeWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export default function Resume({ experiences, educations }) {
  return (
    <PagesLayout>
      <section className='container'>
        <h1>Resume</h1>
        <Experience data={experiences} />
        <DownloadResumeWrapper>
          <DownloadResume fileLocation={RESUME_PDF_FILE} />
        </DownloadResumeWrapper>
        <Education data={educations} />
      </section>
    </PagesLayout>
  );
}

export async function getStaticProps() {
  const experiences = getData(EXPERIENCES);
  const educations = getData(EDUCATIONS);

  return {
    props: {
      experiences,
      educations,
    },
  };
}
