const CANONICAL_ORIGIN = 'https://waxlashtan.com';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'www.waxlashtan.com') {
      url.hostname = 'waxlashtan.com';
      if (url.pathname === '/' && !url.search) {
        return Response.redirect(CANONICAL_ORIGIN, 301);
      }
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.hostname === 'waxlashtan.com' &&
      url.pathname === '/' &&
      !url.search &&
      request.url === `${CANONICAL_ORIGIN}/`
    ) {
      return Response.redirect(CANONICAL_ORIGIN, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
