import { defaultTheme } from "@vuepress/theme-default"

export default {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US",
      title: "Manifesto",
      description: "WEB3DEV Manifesto",
    },
    "/pt-BR/": {
      lang: "Português",
      title: "Manifesto",
      description: "WEB3DEV Manifesto",
    },
  },
  head: [
    ["meta", { name: "title", content: "WEB3DEV Manifesto" }],
    ["meta", { property: "og:title", content: "WEB3DEV Manifesto" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://manifest.w3d.community" }],
    ["meta", { property: "og:image", itemProp: "image", content: "/manifesto.png" }],
    ["meta", { property: "twitter:title", content: "WEB3DEV Manifesto" }],
    ["meta", { property: "twitter:url", content: "https://manifest.w3d.community" }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:image", itemProp: "image", content: "/manifesto.png" }],
  ],
  theme: defaultTheme({
    sidebar: false,
    repo: "https://github.com/w3b3d3v/w3d-manifesto",
    contributors: false,
    logo: "/images/w3d-logo-hor.png",
    logoDark: "/images/w3d-logo-hor-ac.png",
    editLink: false,
  }),
}
