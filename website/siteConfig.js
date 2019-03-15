/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const users = [{
  caption: 'Swiss Life',
  image: '/img/logo_sl_oss.svg',
  infoLink: 'https://SwissLife-OSS.github.io',
  pinned: true,
}, ];

const siteConfig = {
  title: 'Snapshooter', // Title for your website.
  tagline: 'A snapshot testing tool for .NET Core and .NET Framework',
  url: 'https://snapshooter.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  url: 'https://snapshooter.github.io',
  baseUrl: '/',

  // Used for publishing and more
  projectName: 'snapshooter-docs',
  organizationName: 'SwissLife-OSS',
  organizationUrl: 'https://swissLife-oss.github.io',

  headerLinks: [{
      doc: 'introduction',
      href: '/docs',
      label: 'Docs'
    },
    {
      doc: 'doc4',
      label: 'API'
    },
    {
      page: 'help',
      label: 'Help'
    },
    {
      blog: true,
      label: 'Blog'
    },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo_sl_snapshooter.svg',
  footerIcon: 'img/logo_sl_oss.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#ffffff',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Swiss Life Developer`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/logo_sl_snapshooter.svg',
  twitterImage: 'img/logo_sl_snapshooter.svg',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // direct editing of docs
  editUrl: "https://github.com/SwissLife-OSS/snapshooter-docs/edit/master/docs/",

  repoUrl: 'https://github.com/SwissLife-OSS/snapshooter-docs',
};

module.exports = siteConfig;