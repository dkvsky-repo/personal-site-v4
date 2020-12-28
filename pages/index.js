import Layout from '../components/Layout';
// import ReactMarkdown from 'react-markdown';
import { getData } from '../utils/markdown-importer/markdownImporter';
import { ABOUT } from '../constants';
import Hero from '../components/Hero/Hero';

export default function Home({ about }) {
  const {
    main_headline,
    secondary_headline,
    support_headline,
    image,
  } = about.metadata;

  return (
    <Layout>
      <Hero
        avatar={image}
        mainHeadline={main_headline}
        secondaryHeadline={secondary_headline}
        supportHeadline={support_headline}
      />
      <section>
        {/* <div>
          <h1>David Kontorovsky</h1>
        </div> */}
        {/* <p>{secondary_headline}</p>
        <h1>
          <ReactMarkdown source={main_headline} />
        </h1>
        <ReactMarkdown source={support_headline} /> */}
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
