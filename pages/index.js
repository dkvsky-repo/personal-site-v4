import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import { getData } from "../utils/markdown-importer/markdownImporter";
import { ABOUT } from "../constants";

export default function Home({ about }) {
  const { heading_1, heading_2, heading_3, image, excerpt } = about.metadata;

  return (
    <Layout>
      <section className="about">
        <img src={image} alt="Profile image" />
        <ReactMarkdown source={heading_1} />
        <h1>{heading_2}</h1>
        <p>{heading_3}</p>
      </section>
      <section className="about-excerpt">
        <ReactMarkdown source={excerpt} />
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
