import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "personalize",
  description: "blogging website ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "zl", link: "/zl" },
    ],

    sidebar: [
      {
        text: "zl",
        items: [
          { text: "Markdown Examples", link: "/zl" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/zlkaede11" }],
  },
});
