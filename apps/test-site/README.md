# test-site

A small bakery website ("Hearth & Crumb") that acts as the **host application** for developing the AI editor SDK.
It is deliberately minimal: no auth, cart, backend, forms or third-party UI libraries. Angular 22, standalone
components, zoneless, SSR with hydration.

## Run

Requires Node `^24.15` (or `^22.22.3`) and pnpm. From the repository root:

```bash
pnpm install
pnpm --filter test-site start        # dev server with SSR, http://localhost:4200
pnpm --filter test-site build
pnpm --filter test-site test         # add --watch=false for a single run
PORT=4000 node apps/test-site/dist/test-site/server/server.mjs   # production SSR server
```

The production server only answers for hosts listed in `security.allowedHosts` in `angular.json`
(`localhost` by default). Add your domain there when deploying.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, promo banner, repeated features, featured items, testimonials, CTA band |
| `/menu` | Repeated menu items grouped by category |
| `/contact` | `tel:`, `mailto:` and external links |
| `**` | Not found (HTTP 404) |

## Content conventions

- **One-off copy** (headings, paragraphs, images, links) is written directly in the template. It will become the
  default value when the SDK pipes are introduced.
- **Repeated content** lives in typed arrays in `src/app/data/` and is rendered with `@for`.
- Every repeated entry has an `id`: a hand-written, lowercase kebab-case slug, unique within its list, never derived
  from array position and never reused. Templates `track` by `id`, never `$index`. `data.spec.ts` enforces this.
- Planned key shape for later phases: `route.region.key` for one-off content, `route.region.<id>.key` for repeated
  content (for example `menu.items.sourdough.name`).

## SSR rules

1. No `window`, `document`, `localStorage` or `navigator` in components. Browser-only work goes in `afterNextRender`.
2. Nothing non-deterministic while rendering (`Math.random`, `Date.now`, random IDs).
3. No `innerHTML`, `ngSkipHydration` or DOM patching.
4. Images always have `alt`, `width` and `height`.
5. No third-party DOM widgets, no external fonts or CDNs.
6. All styling goes through the CSS custom properties in `src/styles.css`; no inline `style` attributes.
7. Every route is server-rendered per request (`RenderMode.Server`), not prerendered.
