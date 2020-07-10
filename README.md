# Personal Website (V4)

Launching new site mid-July.

## A Few Things I Love About V4

- Built with React / Next JS and a sprinkle of Node.
- Previous version was headless with GraphCMS, GraphQL, Apollo and React (create-react-app). **This version gets leaner, meaner, faster** following the static pages model on most of the site.
- The content for most pages is being pulled from _markdown_ files leveraging NextJS `getStaticProps()`. Checkout the script in `/utils/markdown-importer`.
- Using "front matter" in the markdown files to model my data was... fun 😆
- I'm using **git submodules** for the content files in `/markdown/resume-data` 🙌 and loving how this piece of the site is totally independent from the main repo, yet in can easily be sync'd.
- For last version I used plain CSS / Sass. This time I bite the **TailwindCSS** bullet ;-) There might be CSS/Sass and CSS-in-JS to a lesser extent (still working on it at the time of this writing).

## Coming Up Next

("Next", get it? Pun intended)

- Hosting: I was thinking about keeping **Netlify**, but most likely I'll switch to **Vercel**. Not that I don't like Netlify. It's just that I hear that the NextJS / Vercel integration makes more sense. It's a good excuse to try it out I guess.
- Blog: There will be a blog section. It will be a phase 2 because I still haven't decided what I'll be using, but most likely it will be **Strapi**, GraphQL and NextJS of course.
