import Layout from '../../components/Layout';
import ReactMarkdown from 'react-markdown';
import { getData } from '../../utils/markdown-importer/markdownImporter';
import { ABOUT } from '../../constants';

export default function About({ about, experiences, educations }) {
  return (
    <Layout>
      <section className='about'>
        <h1>{about.id}</h1>
        <ReactMarkdown source={about.content} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = getData(ABOUT);

  return {
    props: {
      about,
    },
  };
}
