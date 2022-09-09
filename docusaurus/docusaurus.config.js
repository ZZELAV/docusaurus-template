// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Title',
  tagline: 'Docusaurus Tagline',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'data/favicon.ico',
  organizationName: 'zzelav', // github user name
  projectName: 'docusaurus-template', // repo name
  trailingSlash: true,

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    localeConfigs: {
      de: {
        htmlLang: 'de-CH',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          path: 'docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'appendix',
  //       path: 'appendix',
  //       routeBasePath: 'appendix',
  //       sidebarPath: require.resolve('./sidebars.js'),
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Title',
        logo: {
          alt: 'Logo',
          src: 'data/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Doku 📖',
          },
          // {
          //   to: '/appendix/',
          //   label: 'Appendix 📚',
          //   position: 'left',
          //   activeBaseRegex: `/appendix/`,
          // },
          {
            to: '/docs/tags/',
            label: 'Tags 🔎',
            position: 'left',
          },
          {
            href: 'https://github.com/ZZELAV/docusaurus-template',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Doku',
                to: '/docs',
              },
              // {
              //   label: 'Appendix',
              //   to: '/appendix',
              // },
              {
                label: 'Tags',
                to: '/docs/tags',
              },
            ],
          },
          {
            title: ' ',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ZZELAV/docusaurus-template',
              },
              {
                label: 'Markdown Guide',
                href: 'https://www.markdownguide.org/',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
        ],
        copyright: `v0.0<br>Copyright © ${new Date().getFullYear()} Docusaurus-template, Valentino Panico`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // https://prismjs.com/#supported-languages
        // additionalLanguages: [],
      },
    }),
};

module.exports = config;
