module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "lowercase",
      description: "Documentation for lowercase app",
    },
  },
  themeConfig: {
    repoLabel: "Contribute!",
    repo: "https://github.com/lowercase-app/learn",
    docsDir: "docs",
    editLinks: true,
    docsBranch: "master",
    editLinkText: "Help us improve this page!",
    search: true,
    displayAllHeaders: true,
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        lastUpdated: "Last Updated",
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
        nav: [
          { text: "Guide", link: "/" },
          { text: "✨lowercase	", link: "https://lowercase.app" },
        ],
        sidebar: [
          {
            title: "Documents",
            path: "/documents/",
            collapsable: false,
            sidebarDepth: 2,
          },

          {
            title: "Topic Tags",
            path: "/topic-tags/",
            collapsable: false,
            sidebarDepth: 2,
          },

          {
            title: "To-dos",
            path: "/to-dos/",
            collapsable: false,
          },

          {
            title: "Publishing Documents",
            path: "/publishing/",
            collapsable: false,
          },

          {
            title: "Publishing Slide Presentations",
            path: "/slides/",
            collapsable: false,
          },

          {
            title: "Code Highlight",
            path: "/code/",
            collapsable: false,
          },

          {
            title: "Shortcut Reference",
            path: "/shortcuts/",
            collapsable: false,
          },
          {
            title: "User Settings",
            path: "/user-settings/",
            collapsable: false,
          },
        ],
      },
    },
  },
};
