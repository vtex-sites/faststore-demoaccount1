
module.exports = {
  seo: {
  "title": "Lamps Plus",
  "description": "Lamps Plus",
  "titleTemplate": "%s |  Lamps Plus",
  "author": "Lamps Plus"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "demoaccount1",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://demoaccount1.vtex.app",
  secureSubdomain: "https://demoaccount1.myvtex.com",
  checkoutUrl: "https://demoaccount1.myvtex.com/checkout",
  loginUrl: "https://demoaccount1.myvtex.com/login",
  accountUrl: "https://demoaccount1.myvtex.com/account",

  previewRedirects: {
    home: '/',
    plp: "/musical%20instruments",
    search: "/s?q=Rogue%20Starter",
    pdp: "/rogue-starter-acoustic-guitar-blue-burst/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/rogue-starter-acoustic-guitar-blue-burst/p",
      collection: "/musical%20instruments",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/rogue-starter-acoustic-guitar-blue-burst/p",
      collection: "/musical%20instruments",
      collection_filtered: "/musical%20instruments/?category-1=musical%20instruments&brand=Rogue%20Starter&facets=category-1%2Cbrand%27",
      search: "/s?q=Rogue%20Starter",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://demoaccount1.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
