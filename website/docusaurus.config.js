const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Real System',
    tagline: 'Easily build real applications with a real system of components',
    url: 'https://realsystem.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'bigwoof91', // Usually your GitHub org/user name.
    projectName: 'realsystem', // Usually your repo name.
    themes: ['@docusaurus/theme-live-codeblock'],
    plugins: [
      path.resolve(
        __dirname,
        './docusaurus-vfile-mock-process-plugin/index.js'
      ),

      [
        'docusaurus-plugin-react-docgen-typescript',
        {
          // pass in a single string or an array of strings
          src: ['../packages/**/index.ts'],
          global: true,
          parserOptions: {
            // pass parserOptions to react-docgen-typescript
            // here is a good starting point which filters out all
            // types from react
            propFilter: (prop, component) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('@types/react');
              }

              return true;
            },
          },
        },
      ],
    ],
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl:
              'https://github.com/bigwoof91/realsystem/tree/main/website',
          },
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl:
          //     'https://github.com/bigwoof91/realsystem',
          // },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

      ({
        liveCodeBlock: {
          playgroundPosition: 'bottom',
        },
        navbar: {
          title: 'Real System',
          logo: {
            alt: 'Real System Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs',
            },
            // { to: '/blog', label: 'Blog', position: 'left' },
            {
              href: 'https://github.com/bigwoof91/realsystem',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Docs',
                  to: '/docs/intro',
                },
              ],
            },
            // {
            //   title: 'Community',
            //   items: [
            //     {
            //       label: 'Stack Overflow',
            //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //     },
            //     {
            //       label: 'Discord',
            //       href: 'https://discordapp.com/invite/docusaurus',
            //     },
            //     {
            //       label: 'Twitter',
            //       href: 'https://twitter.com/docusaurus',
            //     },
            //   ],
            // },
            {
              title: 'More',
              items: [
                // {
                //   label: 'Blog',
                //   to: '/blog',
                // },
                {
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Real System`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
