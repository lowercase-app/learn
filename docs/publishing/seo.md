---
description: "When published, portions of your document (or slides) are used to populate page `meta` (`og` tags) to help with search engine optimization and sharing (`twitter` tags)."

tags:
  - search engine optimization
  - seo
  - web crawler
  - document meta
---

# Search Engine Optimization

When published, portions of your document (or slides) are used to populate page `meta` to help with search engine optimization and sharing (`og` and `twitter` tags).

## Meta information

### title

```html
<title>...</title>
```

The page title of the published document is set as the [document title](/guide/documents.html#document-titles).

### description

```html
<meta name="description" content="..." />
```

The first 160 characters of the document becomes the page description.

### keywords

```html
<meta name="keywords" content="..." />
```

Document [topics](/guide/topic-tags.html) are joined together and set in the meta `keywords` tag.

## Sitemap

If public, your user profile will be added to the lowercase sitemap to encourage search engines to index the content.

Also, any documents that are made public **and** added to your public profile will be added to the sitemap.

Documents that are **not published** and **not added to a public profile** will not be identified in the generated sitemap.
