import styled from 'styled-components';
import { FlexCenteredXY } from '../StyledHelpers';

const StyledMyStack = styled(FlexCenteredXY)`
  h2 {
    text-align: center;
    font-size: 3rem;
  }
`;

export default function MyStack() {
  return (
    <>
      <StyledMyStack as='section' className='container-fluid'>
        <h2>Tech Stack</h2>
        <div className='grid'>
          <div>
            <img src='images/my-mac.png' alt='Laptop with stickers' />
          </div>
          <div>
            <h3>Languages</h3>
            <p>JavaScript, TypeScript, and NodeJS.</p>
            <h3>Libraries and Frameworks</h3>
            <ul>
              <li>React, NextJS, Styled Components, Material UI.</li>
              <li>Jest, Mocha, Jasmine.</li>
              <li>Sass, PostCSS, Bootstrap, TailwindCSS.</li>
              <li>
                Templating with Handlebars, Mustache, NunJucks and Liquid.
              </li>
            </ul>
            <h3>APIs</h3>
            <p>REST, GraphQL, Apollo.</p>
            <h3>Cloud</h3>
            <p>Netlify, Vercel, Digital Ocean, AWS.</p>
            <h3>Tools and Others</h3>
            <p>
              Snowpack, Webpack, Parcel, Grunt, Gulp, Git, Docker, Postman,
              Insomnia, Figma, Photoshop, Sketch.
            </p>
            <h3>Wish List</h3>
            <p>Vue and Svelte.</p>
          </div>
        </div>
      </StyledMyStack>
    </>
  );
}
