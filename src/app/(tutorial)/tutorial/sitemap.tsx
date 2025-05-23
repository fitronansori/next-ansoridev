import { config } from "@/config";
import type { MetadataRoute } from "next";
import urlJoin from "url-join";
import fs from "fs";
import path from "path";

const TUTORIALS_PATH = path.join(process.cwd(), "src/content/tutorial");

function getTutorialSlugs() {
  return fs.readdirSync(TUTORIALS_PATH).filter((dir) => {
    const fullPath = path.join(TUTORIALS_PATH, dir);
    return fs.statSync(fullPath).isDirectory();
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getTutorialSlugs();
  const paths = slugs.map((slug) => ({
    url: urlJoin(config.baseUrl, "tutorial", slug),
    lastModified: new Date(),
    priority: 0.8,
  }));
  return paths;
}
