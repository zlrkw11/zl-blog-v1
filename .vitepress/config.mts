import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "personalize",
  description: "blogging website ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "zl", link: "/zl" },
    ],

    sidebar: [
      {
        text: "go to",
        items: [
          { text: "personal page", link: "/zl" },
          { text: "blogs", link: "/blogs/" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/zlkaede11" }],
  },
});
