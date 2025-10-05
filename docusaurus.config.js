// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frontend Development',

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
  },

  organizationName: 'StartSchoolHQ',
  projectName: 'crossteam-collab',
  url: 'https://startschoolhq.github.io',
  baseUrl: '/crossteam-collab/',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    navbar: {
      title: 'Cross team collaboration',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'webAppWorkflowSidebar',
          position: 'left',
          label: 'Web app workflow',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/start-school',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/start-school',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StartSchool. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'c', 'ruby'],
    },
  },
};

export default config;
