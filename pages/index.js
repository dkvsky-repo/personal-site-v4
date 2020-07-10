import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import { getData } from "../utils/markdown-importer/markdownImporter";
import { ABOUT } from "../constants";

export default function Home({ about }) {
  const {
    main_headline,
    alternative_headline,
    secondary_headline,
    support_headline,
    image,
  } = about.metadata;

  return (
    <Layout>
      <section className="hero">
        <img src={image} alt="Profile image" />
        <p className="hero__secondary-headline">{secondary_headline}</p>
        <h1>
          <ReactMarkdown source={main_headline} />
        </h1>
        <ReactMarkdown source={support_headline} />
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
