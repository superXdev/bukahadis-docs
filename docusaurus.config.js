/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'BukaHadis',
  tagline: 'Berisi kumpulan hadis-hadis dengan total 38ribu lebih',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'BukaHadis',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Dokumentasi',
        },
        {href: 'https://bukahadis.netlify.app', label: 'Demo', position: 'left'},
        {
          href: 'https://github.com/superXdev',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/superXdev',
            },
            {
              label: 'Facebook',
              href: 'https://web.facebook.com/vinz.an.121/',
            },
            {
              label: 'Official site',
              href: 'https://www.fikridev.tech/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Demo',
              href: 'https://bukahadis.netlify.app/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Devinesia. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
