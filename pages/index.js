import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import { getData } from "../utils/markdown-importer/markdownImporter";
import { ABOUT } from "../constants";

export default function Home({ data }) {
  const { excerpt } = data.metadata;

  return (
    <Layout>
      <section className="about">
        <ReactMarkdown source={data.metadata.heading_1} />
        <h1>{data.metadata.heading_2}</h1>
        <p>{data.metadata.heading_3}</p>
      </section>
      <section className="about-excerpt">
        <ReactMarkdown source={excerpt} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = getData(ABOUT);

  return {
    props: {
      data,
    },
  };
}
