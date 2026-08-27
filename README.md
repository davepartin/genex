# GENEX

A phone-first children's interactive alphabet of 24 stories from Genesis and Exodus, A through X.

Twenty-four charcoal tiles fill the screen in a 6×4 portrait grid, touching edge to edge like
memory cards. Tapping a tile flips it to a fullscreen story: the title, a one- or two-sentence
summary, its key words, one ESV verse, and one "…but Jesus…" line. Tapping again flips it back
to the grid.

## The alphabet

| | | | |
|---|---|---|---|
| A Adam | B Boot | C Cain | D Destroyer |
| E Elevate | F Father | G Gomorrah | H Hagar |
| I Isaac | J Jacob | K Kneel | L Locked |
| M Moses | N Nile | O Oppressed | P Plagues & Passover |
| Q Quenched | R Red Sea | S Sinai | T Ten Commandments & Tabernacle Directions |
| U Up on the Mountain | V Valley | W Worship Tent | X eXodus |

## Running it

```bash
npm install
npm run dev
```

`npm run dev` prints a network URL (`http://<your-ip>:5173`). Open that on an iPhone on the same
Wi-Fi to use the app in portrait.

Other scripts:

- `npm run build` — production build into `dist/`
- `npm run preview` — serve the production build
- `npm run tiles:check` — confirm all 24 illustrations are in place
- `npm run lint` — oxlint

## The tile illustrations

The 24 charcoal illustrations live in `public/tiles/` and must use these exact filenames, in
A–X order:

```
Adam.jpeg   boot.jpeg      Cain.jpeg      Destroyer.jpeg
Elevate.jpeg Father.jpeg   Gomorrah.jpeg  Hagar.jpeg
Isaac.jpeg  Jacob.jpeg     Kneel.jpeg     Locked.jpeg
Moses.jpeg  Nile.jpeg      Oppressed.jpeg Passover.jpeg
Quenched.jpeg RedSea.jpeg  Sinai.jpeg     Tabernacle.jpeg
Mountain.jpeg Valley.jpeg  WorshipTent.jpeg eXodus.jpeg
```

The filenames are the only wiring — drop the JPEGs into `public/tiles/` and they appear. Any tile
whose file is missing falls back to a lettered charcoal-on-cream stand-in, so the app stays
playable either way. Run `npm run tiles:check` to see which are present.

Portrait art works best; each tile is rendered with `object-fit: cover` at roughly a 2:3 ratio.

## Story copy

All wording lives in `src/stories.ts` — titles, summaries, key words, ESV verses, and Christ lines.
That file is the single source of truth for the text; nothing is generated at runtime.

## Deploying

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and publishes it to
GitHub Pages on every push to `main`. In the repository settings under **Pages**, set the source
to **GitHub Actions**; the resulting phone URL is `https://davepartin.github.io/genex/`.

The workflow sets `VITE_BASE=/genex/` so asset paths resolve under the project-site subpath. For
any host that serves from the domain root (Vercel, Netlify, a plain static server), build without
`VITE_BASE` and deploy `dist/`.
