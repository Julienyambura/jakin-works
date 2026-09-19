import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap { const base = "https://jakinworks.com"; return ["", "/about", "/services", "/materials", "/projects", "/contact", "/request-a-quote"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
