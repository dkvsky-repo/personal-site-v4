import Layout from "../components/Layout";
import { getData } from "../utils/markdown-importer/markdownImporter";
import { RECOMMENDATIONS } from "../constants";
import ReactMarkdown from "react-markdown";

export default function Recommendations({ recommendations }) {
  recommendations.sort((a, b) => b.metadata.order - a.metadata.order);

  return (
    <Layout>
      <section className="recommendations">
        <h1>Recommendations</h1>
        {recommendations.map((r) => (
          <div className="recommendation__item" key={r.id}>
            <blockquote>
              <ReactMarkdown source={r.content} />
            </blockquote>
            <p>
              {r.metadata.name}, {r.metadata.work_relationship},{" "}
              {r.metadata.organization} <br />
              {r.metadata.date}. Via {r.metadata.origin}
            </p>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const recommendations = getData(RECOMMENDATIONS);
  return {
    props: { recommendations },
  };
}
