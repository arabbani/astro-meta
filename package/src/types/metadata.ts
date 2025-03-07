import type { OpenGraphMetadata } from './open-graph-metadata';
import type { TwitterMetadata } from './twitter-metadata';

/**
 * Represents metadata for a webpage
 */
export type Metadata = {
  /**
   * The title of the webpage
   * @example <title>Your webpage title</title>
   */
  title: string;

  /**
   * A short description of the webpage content
   * @meta description
   * @example <meta name="description" content="Your website description" />
   */
  description?: string | undefined;

  /**
   * Canonical URL of the webpage
   * @default The current url without the query params
   * @example <link rel="canonical" href="https://example.com/your-page" />
   */
  canonicalUrl?: string | undefined;

  /**
   * Character set of the webpage
   * @default UTF-8
   * @meta charset
   * @example <meta charset="UTF-8" />
   */
  charset?: string | undefined;

  /**
   * Whether the webpage should be indexed by search engines
   * @default true
   * @meta robots
   */
  index?: boolean | undefined;

  /**
   * Whether the webpage should be followed by search engines
   * @default true
   * @meta robots
   */
  follow?: boolean | undefined;

  /**
   * Keywords associated with the webpage
   * @meta keywords
   * @example <meta name="keywords" content="keyword1, keyword2, keyword3" />
   */
  keywords?: string[] | undefined;

  /**
   * Open Graph metadata for the webpage
   */
  openGraph?: OpenGraphMetadata | undefined;

  /**
   * Twitter metadata for the webpage
   */
  twitter?: TwitterMetadata | undefined;

  /**
   * Author of the webpage
   * @meta author
   * @example <meta name="author" content="John Doe" />
   */
  author?: string | undefined;

  /**
   * URL of the author of the website
   * @meta author
   * @example <link rel="author" href="https://johndoe.com" />
   */
  authorWebsite?: string | undefined;

  /**
   * URL to the sitemap
   * @default /sitemap.xml
   * @example <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
   */
  sitemapUrl?: string | undefined;
};
