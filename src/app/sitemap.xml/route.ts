import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kirkcollar.com";
  return [
    "",
    "/product",
    "/how-it-works",
    "/buy",
    "/story",
    "/institutions",
    "/support",
    "/contact",
    "/privacy",
    "/terms",
    "/patent",
  ].map((p) => ({ url: base + p, lastModified: new Date() }));
}

