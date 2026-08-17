
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 443, hash: 'd3d30d41ab8b04ddf5077991cb06657a320e90aac37dbfd7d11f8149f379eb60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 983, hash: 'bbad3ee35315f4f7bf9fdf5691b21a977de73d52e365ca453ad99bb92da36c91', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2697, hash: '06bb057233348c591da0fc60a90324ea961b0932072d747c2e0cdd51a233ec22', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
