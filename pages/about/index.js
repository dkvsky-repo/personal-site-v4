import PagesLayout from '../../components/PagesLayout';
import ReactMarkdown from 'react-markdown';
import { getData } from '../../utils/markdown-importer/markdownImporter';
import { ABOUT } from '../../constants';

export default function About({ about }) {
  return (
    <PagesLayout>
      <section className='container'>
        <h1>About me</h1>
        <div className='grid'>
          <div className='sidebar'>
            <img src='images/aboutmepic.jpeg' alt='DK in pics' />
          </div>
          <div className='content'>
            <ReactMarkdown source={about.content} />
          </div>
        </div>
      </section>
    </PagesLayout>
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
