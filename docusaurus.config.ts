import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Proxana',
  tagline: 'Proxana Documentation',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.proxana.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mshah21202', // Usually your GitHub org/user name.
  projectName: 'proxana-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_9HX1M1b6J7UVuCvvDPcZQyTG7wovrqFaP2fFT4X7gSR",
        appUrl: "https://evph.proxana.dev",
        enableInDevelopment: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    image: 'img/social-card.png',
    navbar: {
      logo: {
        alt: 'Proxana Logo',
        src: 'img/logo.svg',
        width: "160rem",
        href: 'https://proxana.dev',
        target: '_self',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ghq9XhB3Tv',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Proxana.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: ['dart', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
