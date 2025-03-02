export const SITE_NAME = "Cameron Balahan";
export const SITE_DESCRIPTION = "I'm a product leader and entrepreneur with a passion for creating excellent developer experiences.  Currently, I lead a portfolio of developer products at Google that includes the Go programming language — one of the most-loved and fastest growing developer products in the industry — as well as a new suite of AI agents for the software development life cycle. I also frequently present keynotes and technical talks at industry conferences, including at Google I/O, Google Cloud Next, and at GopherCons around the world.";
export const SITE_DOMAIN = "cameronb.dev";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export type RouteName = keyof typeof ROUTES;

export const ROUTES = {
  'cameronb.dev': '/',
  presentations: '/presentations',
};

export function getImageURL(title: string, imgMetadata?: string) {
  return `${SITE_URL}${imgMetadata ?? `/og?title=${title}`}`;
}

export function getRouteURL(routeName: RouteName) {
  return `${SITE_URL}${ROUTES[routeName]}`;
}
