# ShipBee Campaign — landing page

Next.js (App Router) + Tailwind CSS v4 build of the **ShipBee Campaign** Figma page
(`Frame 2147225722`, 1512 × 7306): "Shop Worldwide. We'll Deliver the Rest."

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure

| Section (top → bottom)            | Component                              |
| --------------------------------- | -------------------------------------- |
| Floating nav bar                  | `src/components/Header.tsx`            |
| Hero + paste-link / track form    | `Hero.tsx`, `LinkSearch.tsx` (client)  |
| Stats row                         | `Stats.tsx`                            |
| Shop from international stores    | `InternationalStores.tsx`              |
| Global Shopping Made Simple       | `Steps.tsx` (client, auto-cycles)      |
| Millions of Products (marquee)    | `Categories.tsx`                       |
| Favorite brands logo wall         | `Brands.tsx`                           |
| Built for Every Delivery Journey  | `DeliveryJourney.tsx`                  |
| All over the world (flag marquee) | `AllOverTheWorld.tsx`                  |
| Final CTA + footer                | `Footer.tsx`                           |

Design tokens (navy `#1E1E4B`, orange `#E85122`, etc.) live in `src/app/globals.css`.
Fonts (Poppins, Inter, Alexandria) are self-hosted via `@fontsource`.

## Images

Every image slot is listed in `src/lib/assets.ts` and served from `public/figma/`.

- **Icons** come from the same Iconify sets the Figma file uses and are generated
  into `src/lib/icons.ts` by `npm run icons`.
- **Round flags** are real (`circle-flags` set), also written by `npm run icons`.
- **Everything else** (logos, product photos, the container, MacBook, phone, plane,
  box, cart illustrations, brand logos, category photos) is currently a labelled
  placeholder made by `npm run placeholders`. To swap one in, export it from Figma
  and save it at the same path (update the extension in `assets.ts` if it's a PNG).
  The placeholder script never overwrites a real file.

`design-reference/` holds Figma screenshots of each section for visual comparison.
