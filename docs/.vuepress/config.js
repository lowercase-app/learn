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
    // displayAllHeaders: true,
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
            title: "Getting Started",
            collapsable: false,
            children: [
              "guide/documents",
              "guide/topic-tags",
              "guide/to-dos",
              "guide/images",
              "guide/code",
              "guide/shortcuts",
            ],
          },
          {
            title: "Publishing",
            collapsable: false,
            children: ["publishing/documents", "publishing/slideshows"],
          },

          {
            title: "User Settings",
            children: ["user-settings/settings"],
            collapsable: false,
          },
        ],
      },
    },
  },
};
