export const dynamic = "force-static";

const SITE_URL = "https://ashish-codes.web.app";

export default function sitemap() {
  const projectIds = [
    'chatspark',
    'urbanmart',
    'studyhub',
    'inventlab',
    'shophub',
  ];

  const projectUrls = projectIds.map((id) => ({
    url: `${SITE_URL}/projects/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectUrls,
  ];
}