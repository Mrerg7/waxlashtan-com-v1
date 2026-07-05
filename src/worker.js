const CANONICAL_ORIGIN = 'https://waxlashtan.com';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'www.waxlashtan.com') {
      url.hostname = 'waxlashtan.com';
      const target =
        url.pathname === '/' && !url.search ? CANONICAL_ORIGIN : url.href.replace(/\/$/, '') || url.href;
      return Response.redirect(target, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
