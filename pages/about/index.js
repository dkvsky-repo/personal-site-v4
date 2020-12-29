import Layout from '../../components/Layout';
import ReactMarkdown from 'react-markdown';
import { getData } from '../../utils/markdown-importer/markdownImporter';
import { ABOUT } from '../../constants';

export default function About({ about }) {
  return (
    <Layout>
      <section className='container'>
        <h1>{about.id}</h1>
        <div className='grid'>
          <div className='sidebar'>
            <img src='images/aboutmepic.jpeg' alt='DK in pics' />
          </div>
          <div className='content'>
            <ReactMarkdown source={about.content} />
          </div>
        </div>
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
