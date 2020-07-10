import Layout from "../components/Layout";
import { getData } from "../utils/markdown-importer/markdownImporter";
import { EDUCATIONS } from "../constants";

export default function Education({ educations }) {
  educations.sort((a, b) => b.metadata.order - a.metadata.order);

  return (
    <Layout>
      <section className="education">
        <h1>Education</h1>
        {educations.map((ed) => (
          <div className="education__item" key={ed.id}>
            <div className="education__item-logo">
              <img src={ed.metadata.logo} alt={ed.metadata.organization} />
            </div>
            <div className="education__item-description">
              <p>
                {ed.metadata.date} | <strong>{ed.metadata.degree_title}</strong>{" "}
                <br />
                {ed.metadata.organization}, {ed.metadata.location}.
              </p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const educations = getData(EDUCATIONS);
  return {
    props: { educations },
  };
}
