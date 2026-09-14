import type { MetadataRoute } from "next";

// Required by `output: "export"` — the route must be statically generated.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rajugottumukkala.com",
      lastModified: "2026-09-14",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
