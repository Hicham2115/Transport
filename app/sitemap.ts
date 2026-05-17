import type { MetadataRoute } from "next";

const siteUrl = "https://www.nextway-transport.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
