import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";
import unocss from "unocss/astro";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { remarkReadingTime } from "./src/utils/reading-time.mjs";
import {loadTheme} from 'shiki-themes';

const codeTheme = loadTheme("./code-theme.json")


export default defineConfig({
  site: "https://www.johnbakhmat.dev",
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [rehypeAutolinkHeadings],
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: codeTheme,
    },
  },
  integrations: [unocss(), mdx(), sitemap(), react(), prefetch()],
});
