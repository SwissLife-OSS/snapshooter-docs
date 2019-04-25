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


const repoUrl = 'https://github.com/SwissLife-OSS/snapshooter';
const organizationUrl = 'https://swissLife-oss.github.io';
const examplesUrl = 'https://github.com/SwissLife-OSS/snapshooter-examples'
const blogUrl = organizationUrl + "/blog";

const siteConfig = {
  title: 'Snapshooter', // Title for your website.
  tagline: 'A snapshot testing tool for .NET Core and .NET Framework',
  url: 'https://swisslife-oss.github.io', // Your website URL
  baseUrl: '/snapshooter/', // Base URL for your project */

  // DocSearch
  algolia: {
    apiKey: '39489e5eb0c1a936be6ed354c0358c41', 
    indexName: 'swisslife-oss', 
  },

  // Used for publishing and more
  projectName: 'snapshooter',
  realProjectName: "snapshooter",
  organizationName: 'swisslife-oss',
  organizationTitle: 'SwissLife-OSS',
  organizationUrl,
  headerLinks: [{
      doc: 'introduction',
      href: '/docs',
      label: 'Docs'
    },
    {
      href: examplesUrl,
      label: 'Examples',
      external: true
    },
    {
      href: blogUrl,
      blog: true,
      label: 'Blog',
      external: true
    },
    {
      href: repoUrl,
      label: 'GitHub',
      external: true
    },
    { search: true }
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

  repoUrl,
};

module.exports = siteConfig;