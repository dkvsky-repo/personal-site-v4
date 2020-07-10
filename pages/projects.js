import Layout from "../components/Layout";
import { getData } from "../utils/markdown-importer/markdownImporter";
import { PROJECTS } from "../constants";
import ReactMarkdown from "react-markdown";

export default function Projects({ projects }) {
  return (
    <Layout>
      <section className="projects">
        <h1>Projects</h1>
        {projects.map((p) => (
          <div className="projects__item" key={p.id}>
            <h3>{p.metadata.title}</h3>
            {p.metadata.image ? (
              <div className="projects__item-image">
                <img src={p.metadata.image} alt={p.id} />
              </div>
            ) : (
              false
            )}

            <div className="projects__item-tech"></div>

            <div className="projects__item-description">
              <p className="url">
                URL:{" "}
                <a
                  href={p.metadata.url}
                  rel="noopener noreferrer"
                  target="__blank"
                >
                  {p.metadata.url}
                </a>
              </p>
              <ReactMarkdown source={p.content} />
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getData(PROJECTS);

  return {
    props: { projects },
  };
}
