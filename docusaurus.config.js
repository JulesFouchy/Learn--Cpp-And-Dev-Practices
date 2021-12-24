const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

const sidebarItemsGenerator = require("./sidebarItemsGenerator")

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "C++ and Dev Practices",
  tagline: "From 0️⃣ to 🦸",
  url: "https://julesfouchy.github.io/",
  baseUrl: "/Learn--Cpp-And-Dev-Practices/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  plugins: [
    "@docusaurus/plugin-ideal-image",
    "./Thoughts-on-Teaching/gather-skills-plugin",
    [
      require.resolve("docusaurus-lunr-search"),
      {
        excludeRoutes: ["docs/students/**/*", "docs/img/**/*"],
      },
    ],
  ],
  favicon: "img/favicon.ico",
  organizationName: "julesfouchy",
  projectName: "Learn--Cpp-And-Dev-Practices",
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Site Logo",
        src: "img/favicon-32x32.png",
      },
      items: [
        {
          type: "doc",
          docId: "lessons/introduction",
          position: "left",
          label: "Lessons",
        },
        { to: "/docs/students", label: "Skills", position: "left" },
        { to: "/docs/assignment", label: "Assignment", position: "left" },
        { to: "/resources", label: "Resources", position: "left" },
        { to: "/tools", label: "Tools", position: "left" },
        {
          href: "https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices/issues",
          position: "right",
          className: "header-issues-link",
          "aria-label": "GitHub issues",
        },
        {
          href: "https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Other classes",
          items: [
            {
              label: "Generative Art",
              to: "https://julesfouchy.github.io/Learn--Generative-Art",
            },
            {
              label: "Math for Art and Computer Graphics",
              to: "https://julesfouchy.github.io/Learn--Math-for-Art-and-Computer-Graphics",
            },
          ],
        },
        {
          title: "Raise an issue !",
          items: [
            {
              label: "Ask a question",
              to: "https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices/issues",
            },
            {
              label: "Report a mistake",
              to: "https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices/issues",
            },
            {
              label: "Give me feedback",
              to: "https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices/issues",
            },
          ],
        },
        {
          title: "Contact Me",
          items: [
            {
              label: "Discord",
              to: "https://discord.com/users/372812330742054914",
            },
            {
              label: "E-Mail",
              to: "mailto:jules.fouchy@ntymail.com",
            },
            {
              label: "GitHub",
              to: "https://github.com/JulesFouchy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.
              <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              `,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["cmake"],
    },
    // algolia: {
    //     apiKey: 'YOUR_API_KEY',
    //     indexName: 'YOUR_INDEX_NAME',
    //     contextualSearch: true,
    //     searchParameters: {},
    //     placeholder: 'Search',
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarItemsGenerator,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}
