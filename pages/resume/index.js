import Layout from '../../components/Layout';
import { getData } from '../../utils/markdown-importer/markdownImporter';
import { EXPERIENCES, EDUCATIONS } from '../../constants';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';

export default function Resume({ experiences, educations }) {
  return (
    <Layout>
      <Experience data={experiences} />
      <Education data={educations} />
    </Layout>
  );
}

export async function getStaticProps() {
  // const about = getData(ABOUT);
  const experiences = getData(EXPERIENCES);
  const educations = getData(EDUCATIONS);

  return {
    props: {
      // about,
      experiences,
      educations,
    },
  };
}
