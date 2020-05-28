module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "✨lowercase Documentation",
      description:
        "Documentation for lowercase. The simplest way to make public pages and presentations from your notes and to-dos.",
    },
  },
  themeConfig: {
    // repoLabel: "Contribute!",
    // repo: "https://github.com/lowercase-app/learn",
    domain: "https://learn.lowercase.app",
    twitter: "@lowercase_app",
    docsDir: "docs",
    editLinks: false,
    docsBranch: "master",
    editLinkText: "Help us improve this page!",
    search: true,
    smoothScroll: true,

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
          { text: "Getting Started", link: "/" },
          { text: "✨lowercase	", link: "https://www.lowercase.app" },
        ],
        sidebar: [
          {
            title: "Getting Started",
            collapsable: false,
            children: [
              "/",
              "guide/topic-tags",
              "guide/to-dos",
              "guide/images",
              "guide/slides",
              "guide/shortcuts",
              "guide/code",
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
  plugins: {
    sitemap: {
      hostname: "https://learn.lowercase.app",
    },
    seo: {
      image: ($page, $site) =>
        $site.themeConfig.domain + $page.frontmatter.image,
      customMeta: (add, context) => {
        const { $site } = context;

        add("twitter:site", $site.themeConfig.twitter);
        add("twitter:creator", $site.themeConfig.twitter);
        add("twitter:domain", "https://www.lowercase.app");
        add("og:locale", "en_US");
        add("og:image:type", "image/png");
      },
    },
  },
};
