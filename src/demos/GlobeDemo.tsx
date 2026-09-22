import { useEffect, useRef, useState } from 'react'
import Globe, { type GlobeInstance } from 'globe.gl'
import { generateGeoPoints } from '../data/generators'
import { CATEGORY_COLORS, type GeoPoint } from '../data/types'
import { LoadingOverlay } from '../components/LoadingOverlay'
import { CategoryLegend } from '../components/Legend'

export function GlobeDemo() {
  const hostRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<GlobeInstance | null>(null)
  const [ready, setReady] = useState(false)
  const [selected, setSelected] = useState<GeoPoint | null>(null)
  const points = useRef(generateGeoPoints()).current

  useEffect(() => {
    const el = hostRef.current
    if (!el) return

    const g = new Globe(el, { animateIn: true })
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .showAtmosphere(true)
      .atmosphereColor('#00f0ff')
      .atmosphereAltitude(0.18)
      .pointsData(points)
      .pointLat('lat')
      .pointLng('lng')
      .pointAltitude((d) => (d as GeoPoint).value / 900)
      .pointRadius((d) => 0.35 + (d as GeoPoint).value / 280)
      .pointColor((d) => CATEGORY_COLORS[(d as GeoPoint).category])
      .pointsMerge(false)
      .pointLabel(
        (d) =>
          `<div style="font-family:Outfit,sans-serif;padding:6px 8px">
            <b>${(d as GeoPoint).name}</b><br/>
            ${(d as GeoPoint).province} · metric ${(d as GeoPoint).value}
          </div>`,
      )
      .onPointClick((p) => setSelected(p as GeoPoint))
      .hexBinPointsData(points)
      .hexBinPointLat('lat')
      .hexBinPointLng('lng')
      .hexBinPointWeight('value')
      .hexAltitude((d) => (d as { sumWeight: number }).sumWeight * 0.0012)
      .hexTopColor(() => 'rgba(0,240,255,0.55)')
      .hexSideColor(() => 'rgba(255,45,149,0.35)')
      .hexBinResolution(4)

    g.controls().autoRotate = true
    g.controls().autoRotateSpeed = 0.45
    g.controls().enableDamping = true
    g.pointOfView({ lat: 37.2, lng: -4.5, altitude: 1.65 }, 0)

    globeRef.current = g
    setReady(true)

    const resize = () => {
      if (!hostRef.current) return
      const { clientWidth: w, clientHeight: h } = hostRef.current
      g.width(w)
      g.height(h)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    return () => {
      ro.disconnect()
      g._destructor?.()
      globeRef.current = null
    }
  }, [points])

  return (
    <div className="viewport-canvas">
      {!ready && <LoadingOverlay label="Spinning Andalucía metrics…" />}
      <div ref={hostRef} style={{ width: '100%', height: '100%' }} />
      <div className="hud-hint">points + hexbins · Spain / Andalucía focus</div>
      <CategoryLegend />
      {selected && (
        <aside className="side-panel" role="dialog">
          <header>
            <div>
              <h2>{selected.name}</h2>
              <div style={{ marginTop: 6 }}>
                <span
                  className="cat-pill"
                  style={{
                    color: CATEGORY_COLORS[selected.category],
                    borderColor: CATEGORY_COLORS[selected.category],
                  }}
                >
                  {selected.category}
                </span>
              </div>
            </div>
            <button type="button" className="close-btn" onClick={() => setSelected(null)}>
              ×
            </button>
          </header>
          <dl className="kv">
            <dt>Province</dt>
            <dd>{selected.province}</dd>
            <dt>Metric</dt>
            <dd>{selected.value}</dd>
            <dt>Coords</dt>
            <dd>
              {selected.lat.toFixed(3)}, {selected.lng.toFixed(3)}
            </dd>
            <dt>ID</dt>
            <dd>{selected.id}</dd>
          </dl>
        </aside>
      )}
    </div>
  )
}
