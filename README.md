# Mold³

**Mold DB rows into space** — a polished Malackathon prep demo for Daniel.

Dark cinematic SPA showcasing five 3D data-visualization techniques with dense client-side fake Oracle-ish hospital data. No backend. No API keys.

## Demos

| Route | Technique | Stack |
|-------|-----------|--------|
| `#bars` | Instanced bar field (900+ bars), click → row panel | React Three Fiber + drei `<Instances>` |
| `#globe` | Points + hexbins on a globe (Spain / Andalucía) | `globe.gl` |
| `#graph` | Hospitals ↔ diagnoses ↔ categories network | `3d-force-graph` + `three-spritetext` |
| `#chart` | Extruded radial category chart | Custom R3F (RoundedBox / Float / Text) |
| `#hybrid` | 2D search/category strip filtering the 3D field | R3F Instances + filter UI |

## Quick start

```bash
cd mold3d
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build (static)

```bash
npm run build
```

Output lands in `dist/` with Vite `base: '/'` — ready for Cloudflare Pages or any static host.

Preview locally:

```bash
npm run preview
```

## Deploy to Cloudflare Pages

Project name: `mold3d`. Config: `wrangler.toml` (`pages_build_output_dir = "dist"`).

```bash
npm run build
npx wrangler pages deploy dist --project-name=mold3d
```

First time you may need:

```bash
npx wrangler login
npx wrangler pages project create mold3d --production-branch=main
```

## Stack

- Vite + React 19 + TypeScript
- `three`, `@react-three/fiber`, `@react-three/drei`
- `globe.gl` / `three-globe`
- `3d-force-graph`
- Fake data generators in `src/data/`

## Note

> built for Daniel · age is not a veto
