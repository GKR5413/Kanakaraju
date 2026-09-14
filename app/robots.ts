import type { MetadataRoute } from "next";

// Required by `output: "export"` — the route must be statically generated.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://rajugottumukkala.com/sitemap.xml",
  };
}
