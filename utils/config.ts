export const SITE_NAME = "Cameron Balahan";
export const SITE_DESCRIPTION = "";
export const SITE_DOMAIN = "cameronb.dev";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export type RouteName = keyof typeof ROUTES;

export const ROUTES = {
  home: "/",
};

export function getImageURL(title: string, imgMetadata?: string) {
  return `${SITE_URL}${imgMetadata ?? `/og?title=${title}`}`;
}

export function getRouteURL(routeName: RouteName) {
  return `${SITE_URL}${ROUTES[routeName]}`;
}
