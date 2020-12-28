import Layout from '../components/Layout';
import { getData } from '../utils/markdown-importer/markdownImporter';
import { ABOUT, RECOMMENDATIONS } from '../constants';
import Hero from '../components/Hero/Hero';
import MyStack from '../components/MyStack/MyStack';
import SeHablaCodigo from '../components/SeHablaCodigo/SeHablaCodigo';
import Recommendations from '../components/Recommendations/recommendations';

export default function Home({ about, recommendations }) {
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
      <MyStack />
      <SeHablaCodigo />
      <Recommendations data={recommendations} />
    </Layout>
  );
}

export async function getStaticProps() {
  const about = getData(ABOUT);
  const recommendations = getData(RECOMMENDATIONS);

  return {
    props: {
      about,
      recommendations,
    },
  };
}
