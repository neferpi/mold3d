import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { LoadingOverlay } from './components/LoadingOverlay'

const InstancedBarsDemo = lazy(() =>
  import('./demos/InstancedBars').then((m) => ({ default: m.InstancedBarsDemo })),
)
const GlobeDemo = lazy(() =>
  import('./demos/GlobeDemo').then((m) => ({ default: m.GlobeDemo })),
)
const ForceGraphDemo = lazy(() =>
  import('./demos/ForceGraphDemo').then((m) => ({ default: m.ForceGraphDemo })),
)
const PrettyChartDemo = lazy(() =>
  import('./demos/PrettyChart').then((m) => ({ default: m.PrettyChartDemo })),
)
const HybridDemo = lazy(() =>
  import('./demos/HybridDemo').then((m) => ({ default: m.HybridDemo })),
)

type RouteId = 'home' | 'bars' | 'globe' | 'graph' | 'chart' | 'hybrid'

interface DemoMeta {
  id: RouteId
  label: string
  title: string
  blurb: string
  lib: string
}

const DEMOS: DemoMeta[] = [
  {
    id: 'bars',
    label: 'Instanced bars',
    title: 'Instanced bar field',
    blurb:
      'Hundreds of Oracle-ish hospital rows extruded as GPU instances. Height encodes the metric; color maps category. Click any bar for the flat row.',
    lib: 'R3F · drei <Instances>',
  },
  {
    id: 'globe',
    label: 'Globe',
    title: 'Globe / geo layer',
    blurb:
      'Andalucía & Spain city metrics as glowing points plus hexbins on a night-earth globe — reservoirs of activity across the map.',
    lib: 'globe.gl · three-globe',
  },
  {
    id: 'graph',
    label: 'Force graph',
    title: '3D force graph',
    blurb:
      'Relational network: hospitals ↔ diagnoses ↔ categories. Force-directed layout with particle links and sprite labels.',
    lib: '3d-force-graph · three-spritetext',
  },
  {
    id: 'chart',
    label: '3D chart',
    title: 'Pretty extruded chart',
    blurb:
      'A booth-ready radial chart: rounded extruded bars, float animation, emissive accents — custom R3F scene, no stub vibes.',
    lib: 'R3F · drei RoundedBox / Float / Text',
  },
  {
    id: 'hybrid',
    label: 'Hybrid filter',
    title: 'Hybrid 2D → 3D',
    blurb:
      'Thin search + category strip that actually filters a thousand-row instanced field in real time. Proof that flat UI and space can talk.',
    lib: '2D filters + R3F Instances',
  },
]

function parseHash(): RouteId {
  const h = window.location.hash.replace('#', '').trim()
  if (DEMOS.some((d) => d.id === h)) return h as RouteId
  return 'home'
}

function DemoSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="viewport-canvas">
          <LoadingOverlay />
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

export default function App() {
  const [route, setRoute] = useState<RouteId>(() =>
    typeof window !== 'undefined' ? parseHash() : 'home',
  )

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = useCallback((id: RouteId) => {
    window.location.hash = id === 'home' ? '' : id
    setRoute(id)
  }, [])

  const meta = useMemo(() => DEMOS.find((d) => d.id === route), [route])

  return (
    <div className="app-shell">
      <nav className="top-nav">
        <button type="button" className="brand" onClick={() => go('home')}>
          <span className="brand-mark">Mold³</span>
          <span className="brand-tag">Malackathon</span>
        </button>
        <div className="nav-tabs" role="tablist">
          {DEMOS.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={route === d.id}
              className={`nav-tab${route === d.id ? ' active' : ''}`}
              onClick={() => go(d.id)}
            >
              {d.label}
            </button>
          ))}
        </div>
        <span className="nav-meta">mold DB rows → space</span>
      </nav>

      {route === 'home' ? (
        <div className="home-hero">
          <div className="hero-inner">
            <p className="hero-kicker">Public demo · Malackathon prep</p>
            <h1 className="hero-title">
              <span>Mold³</span> — mold flat rows into cinematic space
            </h1>
            <p className="hero-lead">
              Dense fake hospital data, dark booth UI, and five live 3D techniques you can orbit,
              click, and filter — built to impress judges who still think “charts” mean Excel.
            </p>
            <div className="hero-note">built for Daniel · age is not a veto</div>
            <div className="demo-grid">
              {DEMOS.map((d) => (
                <button key={d.id} type="button" className="demo-card" onClick={() => go(d.id)}>
                  <h3>{d.title}</h3>
                  <p>{d.blurb}</p>
                  <div className="tech">{d.lib}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="stage">
          {meta && (
            <div className="stage-caption">
              <div>
                <h1>{meta.title}</h1>
                <p>{meta.blurb}</p>
              </div>
              <span className="lib-badge">{meta.lib}</span>
            </div>
          )}
          <div className="viewport">
            <DemoSuspense>
              {route === 'bars' && <InstancedBarsDemo />}
              {route === 'globe' && <GlobeDemo />}
              {route === 'graph' && <ForceGraphDemo />}
              {route === 'chart' && <PrettyChartDemo />}
              {route === 'hybrid' && <HybridDemo />}
            </DemoSuspense>
          </div>
        </div>
      )}
    </div>
  )
}
