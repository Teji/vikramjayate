import { useEffect } from "react";

const SITE_URL = "https://vikramjayate.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`;

function upsertMeta(name, content, attribute = "name") {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  canonical,
  noindex = false,
  type = "website",
  image = DEFAULT_IMAGE,
  jsonLd,
}) {
  useEffect(() => {
    document.title = title;

    upsertMeta("description", description);
    upsertMeta("robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:type", type, "property");
    upsertMeta("og:url", canonical, "property");
    upsertMeta("og:image", image, "property");
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", image);
    upsertLink("canonical", canonical);

    const existingSchema = document.head.querySelector(
      'script[data-seo-schema="true"]',
    );

    if (existingSchema) existingSchema.remove();

    if (jsonLd) {
      const schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.seoSchema = "true";
      schema.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(schema);
    }

    return () => {
      const schema = document.head.querySelector(
        'script[data-seo-schema="true"]',
      );
      if (schema) schema.remove();
    };
  }, [canonical, description, image, jsonLd, noindex, title, type]);

  return null;
}
