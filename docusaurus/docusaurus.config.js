// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Title",
  tagline: "Docusaurus Tagline",
  url: "https://example.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "data/favicon.ico",
  organizationName: "zzelav", // github user name
  projectName: "docusaurus-template", // repo name
  trailingSlash: false,

  i18n: {
    defaultLocale: "de",
    locales: ["de"],
    localeConfigs: {
      de: {
        htmlLang: "de-CH",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
          path: "docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-image-zoom",
    //   [
    //     "@docusaurus/plugin-content-docs",
    //     {
    //       id: "appendix",
    //       path: "appendix",
    //       routeBasePath: "appendix",
    //       sidebarPath: require.resolve("./sidebars.js"),
    //     },
    //   ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      zoom: {
        selector: "img",
        background: {
          dark: "rgb(32, 35, 42)",
        },
        config: {
          margin: 100,
        },
      },
      navbar: {
        title: "Title",
        logo: {
          alt: "Logo",
          src: "data/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Doku 📖",
          },
          // {
          //   to: "/appendix/",
          //   label: "Appendix 📚",
          //   position: "left",
          //   activeBaseRegex: `/appendix/`,
          // },
          {
            to: "/docs/tags/",
            label: "Tags 🔎",
            position: "left",
          },
          {
            href: "https://github.com/ZZELAV/docusaurus-template",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "// Links",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Doku",
                to: "/docs",
              },
              // {
              //   label: "Appendix",
              //   to: "/appendix",
              // },
              {
                label: "Tags",
                to: "/docs/tags",
              },
            ],
          },
          {
            title: " ",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ZZELAV/docusaurus-template",
              },
              {
                label: "Markdown Guide",
                href: "https://www.markdownguide.org/",
              },
              {
                label: "Docusaurus",
                href: "https://docusaurus.io/",
              },
            ],
          },
        ],
        copyright: `v0.0<br>Copyright © ${new Date().getFullYear()} Docusaurus-template, Valentino Panico. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // https://prismjs.com/#supported-languages
        // additionalLanguages: [],
      },
    }),
};

module.exports = config;
