import Layout from '../../components/Layout';
import { getData } from '../../utils/markdown-importer/markdownImporter';
import { EXPERIENCES, EDUCATIONS } from '../../constants';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';
import DownloadResume from '../../components/DownloadResume/DownloadResume';
import { RESUME_PDF_FILE } from '../../constants';

export default function Resume({ experiences, educations }) {
  return (
    <Layout>
      <section className='container'>
        <Experience data={experiences} />
        <Education data={educations} />
        <DownloadResume fileLocation={RESUME_PDF_FILE} />
      </section>
    </Layout>
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
