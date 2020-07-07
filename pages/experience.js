import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import { getData } from "../utils/markdown-importer/markdownImporter";
import { EXPERIENCES } from "../constants";

export default function Experience({ experiences }) {
  experiences.sort((a, b) => b.metadata.order - a.metadata.order);
  return (
    <Layout>
      <h1>Experience Page</h1>
      <section className="experience">
        {experiences.map((experience) => (
          <>
            <div className="experience-col1">
              {experience.metadata.logo ? (
                <img
                  src={experience.metadata.logo}
                  alt={experience.metadata.organization}
                />
              ) : (
                ""
              )}
              <h3>{experience.metadata.organization}</h3>
              <p>{experience.metadata.location}</p>
              <p>
                {experience.metadata.dateFrom}{" "}
                {experience.metadata.dateTo
                  ? `- ${experience.metadata.dateTo}`
                  : "Present"}
              </p>
            </div>
            <div className="experience col2">
              <ReactMarkdown source={experience.content} />
            </div>
          </>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const experiences = getData(EXPERIENCES);

  return {
    props: {
      experiences,
    },
  };
}
