import { MetadataRoute } from "next";

export default function sitemap() {
  return [
    {
      url: "https://ashish-codes.web.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ashish-codes.web.app/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}