import Layout from "../components/Layout";
import { getData } from "../utils/markdown-importer/markdownImporter";
import { ABOUT, SKILLS } from "../constants";
import SocialNetworks from "../components/SocialNetworks/SocialNetworks";

export default function About({ about, skills }) {
  return (
    <Layout>
      <section className="about">
        <h1>{about.id}</h1>
        <p>{about.content}</p>
      </section>

      <SocialNetworks />

      <section className="skills">
        <div className="languages">
          <h2>Languages</h2>
          <ul>
            {skills.metadata.languages.map((lang) => {
              return <li key={lang}>{lang}</li>;
            })}
          </ul>
        </div>

        <div className="frameworks">
          <h2>Frameworks</h2>
          <ul>
            {skills.metadata.frameworks.map((framework) => {
              return <li key={framework}>{framework}</li>;
            })}
          </ul>
        </div>

        <div className="cms">
          <h2>Content Management Systems</h2>
          <ul>
            {skills.metadata.cms.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>

        <div className="etc">
          <h2>Other tools</h2>
          <ul>
            {skills.metadata.etc.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = getData(ABOUT);
  const skills = getData(SKILLS);

  return {
    props: {
      about,
      skills,
    },
  };
}
