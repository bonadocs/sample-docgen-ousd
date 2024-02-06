// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
export default {
  "title": "OUSD Project",
  "tagline": "Generated with Bonadocs",
  "favicon": "img/favicon.ico",
  "url": "https://your-documentation-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ]
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "./sidebars.js",
          "editUrl": "https://github.com/undefined/undefined/tree/main/"
        },
        "theme": {
          "customCss": "./src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "image": "img/docusaurus-social-card.jpg",
    "navbar": {
      "title": "My Project",
      "logo": {
        "alt": "My Project Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "docSidebar",
          "sidebarId": "contractSidebar",
          "position": "left",
          "label": "Contracts"
        }
      ]
    },
    "prism": {
      "theme": prismThemes.github,
      "darkTheme": prismThemes.dracula
    }
  }
};