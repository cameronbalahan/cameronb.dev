import { getRouteURL, ROUTES } from "../utils/config";

export default async function sitemap() {
  return Object.keys(ROUTES).map((name) => ({
    url: getRouteURL(name as keyof typeof ROUTES),
    lastModified: new Date().toISOString().split('T')[0],
  }));
}
