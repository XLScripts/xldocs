module.exports = {
  title: 'XL Docs',
  tagline: 'Documentation & Articles related to XL Scripts Products',
  url: 'https://xlscripts.com',
  baseUrl: '/',
  favicon: 'img/favicons.png',
  organizationName: 'xlscripts', // Usually your GitHub org/user name.
  projectName: 'xlscripts', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/xlscripts',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documents',
          items: [
            {
              label: 'Instructions for XL Scripts Products',
              to: 'docs/',
            },
            {
              label: 'Theme Development for Products',
              to: 'docs/themes/introduction',
            },
            {
              label: 'The Workflow of XL Framework',
              to: 'docs/xl/introduction',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'XL Scripts Marketplace',
              href: 'https://xlscripts.com',
            },
            {
              label: 'Envato Marketplace',
              href: 'https://codecanyon.net/user/xlscripts',
            },
            {
              label: 'Support Desk',
              href: 'https://xlscripts.com/support',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Fork this Site',
              href: 'https://github.com/xlscripts/xldocs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XL Scripts.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'product/general',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/xlscripts/xlscripts.github.io/site/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/xlscripts/xlscripts.github.io/site/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
