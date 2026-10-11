/**
 * Every image the page uses, keyed by name.
 *
 * Files live in /public/figma. Until the real exports from Figma are dropped in,
 * `npm run placeholders` writes labelled placeholder SVGs at these paths so the
 * page renders. Replace a placeholder by saving the real file under the same name
 * (or change the extension here if the export is a PNG).
 */
export type Asset = { src: string; w: number; h: number; alt: string };

const a = (src: string, w: number, h: number, alt = ""): Asset => ({
  src: `/figma/${src}`,
  w,
  h,
  alt,
});

export const assets = {
  // Brand
  logoShipbee: a("brand/shipbee.svg", 140, 34, "ShipBee"),
  logoShipbeeWhite: a("brand/shipbee-white.svg", 140, 34, "ShipBee"),
  logoConnected: a("brand/connected.svg", 125, 41, "Connected"),
  logoConnectedWhite: a("brand/connected-white.svg", 125, 41, "Connected"),

  // Hero
  heroGlobe: a("hero/globe.svg", 536, 395, "World map"),
  flagUsa: a("flags/usa.svg", 96, 96, "USA"),
  flagChina: a("flags/china.svg", 96, 96, "China"),
  flagKuwait: a("flags/kuwait.svg", 96, 96, "Kuwait"),
  flagAustralia: a("flags/australia.svg", 96, 96, "Australia"),
  flagUae: a("flags/uae.svg", 96, 96, "UAE"),
  flagSingapore: a("flags/singapore.svg", 96, 96, "Singapore"),
  flagKorea: a("flags/korea.svg", 96, 96, "South Korea"),
  flagUk: a("flags/uk.svg", 96, 96, "United Kingdom"),
  flagJordan: a("flags/jordan.svg", 96, 96, "Jordan"),
  flagTurkey: a("flags/turkey.svg", 96, 96, "Turkey"),
  flagQatar: a("flags/qatar.svg", 96, 96, "Qatar"),
  flagQatarWave: a("flags/qatar-wave.svg", 53, 40, "Qatar"),
  productWatch: a("products/apple-watch.svg", 120, 128, "Apple Watch"),
  productCamera: a("products/canon-r7.svg", 120, 128, "Canon R7"),
  productPerfume: a("products/hugo-boss.svg", 120, 128, "Hugo Boss"),
  productShoe: a("products/puma-future-7.svg", 120, 128, "Puma Future 7"),

  // Section: international stores
  container: a("intl/container.svg", 1034, 378, "ShipBee shipping container"),

  // Section: steps (floating products and logos)
  floatController: a("floating/controller.svg", 186, 186, ""),
  floatJersey: a("floating/jersey.svg", 301, 301, ""),
  floatKeyboard: a("floating/keyboard.svg", 208, 208, ""),
  floatSneaker: a("floating/sneaker.svg", 253, 253, ""),
  floatAirpods: a("floating/airpods.svg", 178, 178, ""),
  floatCoat: a("floating/coat.svg", 410, 410, ""),

  // Delivery journey cards
  cardMacbook: a("journey/macbook-amazon.svg", 553, 357, "Shopping on Amazon from ShipBee"),
  cardPhone: a("journey/live-tracking-phone.svg", 400, 420, "Live tracking on the ShipBee app"),
  cardPlane: a("journey/plane.svg", 600, 200, "Cargo plane"),
  cardBox: a("journey/trusted-service.svg", 296, 394, "Secure ShipBee package"),
  cardCart: a("journey/pricing-cart.svg", 370, 380, "Order cart with transparent pricing"),

  // Footer
  appStore: a("footer/app-store.svg", 18, 22, ""),
  playStore: a("footer/play-store.svg", 18, 22, ""),
};

/** Brand logos used in the "Favorite brands" grid and floating around the steps section. */
export const brandLogos = [
  ["samsung", "Samsung"],
  ["target", "Target"],
  ["puma", "Puma"],
  ["zara", "Zara"],
  ["valentino", "Valentino"],
  ["new-balance", "New Balance"],
  ["ecrater", "eCrater"],
  ["global-sources", "Global Sources"],
  ["boss", "Boss"],
  ["sephora", "Sephora"],
  ["nike", "Nike"],
  ["amazon", "Amazon"],
  ["adidas", "Adidas"],
  ["ebay", "eBay"],
  ["temu", "Temu"],
  ["shein", "Shein"],
  ["dejavu", "Dejavu"],
  ["anker", "Anker"],
  ["hm", "H&M"],
  ["shopee", "Shopee"],
  ["ikea", "IKEA"],
  ["boss", "Boss"],
  ["revolve", "Revolve"],
  ["xiaomi", "Xiaomi"],
  ["costco", "Costco"],
  ["apple", "Apple"],
  ["walmart", "Walmart"],
].map(([slug, name]) => a(`logos/${slug}.svg`, 112, 62, name));

export const logo = (slug: string, name: string) => a(`logos/${slug}.svg`, 112, 62, name);

export const categoryImages = [
  "fashion",
  "electronics",
  "beauty",
  "shoes",
  "home",
  "toys",
  "gaming",
  "snacks",
  "health",
  "books",
].map((slug) => a(`categories/${slug}.svg`, 165, 125, ""));

/** Logos that only appear floating around the steps section. */
export const extraLogos = [logo("playstation", "PlayStation")];
