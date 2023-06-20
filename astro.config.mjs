import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://Pratikkk.github.io',
  base: '/agency-site',
  output: "server",
  adapter: netlify()
});