// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightTypeDoc({
          entryPoints: ['../package/src/index.ts'],
          tsconfig: '../package/tsconfig.json',
        }),
      ],
      title: 'Astro Meta',
      description:
        'Astro Meta is a simple yet powerful Astro integration designed to make adding meta tags to your Astro site a breeze. It aims to streamline the process of managing SEO and social media metadata (facebook, twitter) for your web pages.',
      lastUpdated: true,
      credits: true,
      social: {
        github: 'https://github.com/arabbani/astro-meta',
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Introduction', slug: 'introduction' },
            { label: 'Getting Started', slug: 'getting-started' },
          ],
        },
        typeDocSidebarGroup,
      ],
    }),
  ],
});
