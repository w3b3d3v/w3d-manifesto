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
  theme: defaultTheme({
    sidebar: false,
    repo: "https://github.com/w3b3d3v/w3d-manifesto",
    contributors: true,
    logo: "/images/w3d-logo-hor.png",
    logoDark: "/images/w3d-logo-hor-ac.png",
    editLink: false,
  }),
}
