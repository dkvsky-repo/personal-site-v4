import Layout from '../../components/Layout';
import ReactMarkdown from 'react-markdown';
import { getData } from '../../utils/markdown-importer/markdownImporter';
import { ABOUT, EXPERIENCES, EDUCATIONS } from '../../constants';
import Experience from '../../components/Resume/Experience';
import Education from '../../components/Resume/Education';

export default function About({ about, experiences, educations }) {
  return (
    <Layout>
      <section className='about'>
        <h1>{about.id}</h1>
        <ReactMarkdown source={about.content} />
      </section>
      <Experience data={experiences} />
      <Education data={educations} />
    </Layout>
  );
}

export async function getStaticProps() {
  const about = getData(ABOUT);
  const experiences = getData(EXPERIENCES);
  const educations = getData(EDUCATIONS);

  return {
    props: {
      about,
      experiences,
      educations,
    },
  };
}
