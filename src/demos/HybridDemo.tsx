import { Canvas } from '@react-three/fiber'
import { ContactShadows, Instances, Instance, OrbitControls } from '@react-three/drei'
import { Suspense, useMemo, useState, useCallback, useEffect } from 'react'
import { generateMetricRows, barGridPositions } from '../data/generators'
import { CATEGORIES, CATEGORY_COLORS, type Category, type MetricRow } from '../data/types'
import { SidePanel } from '../components/SidePanel'
import { CategoryLegend } from '../components/Legend'
import { LoadingOverlay } from '../components/LoadingOverlay'

const ALL_ROWS = generateMetricRows(1000, 11)

function FilteredField({
  rows,
  onSelect,
}: {
  rows: MetricRow[]
  onSelect: (row: MetricRow) => void
}) {
  const positions = useMemo(() => barGridPositions(rows.length, 32), [rows.length])

  return (
    <Instances key={rows.length + (rows[0]?.id ?? 'empty')} limit={Math.max(rows.length, 1)} range={rows.length}>
      <boxGeometry args={[0.8, 1, 0.8]} />
      <meshStandardMaterial roughness={0.3} metalness={0.5} />
      {positions.map((p) => {
        const row = rows[p.i]!
        const h = 0.35 + (row.metric / 100) * 7.5
        return (
          <Instance
            key={row.id}
            position={[p.x, h / 2, p.z]}
            scale={[1, h, 1]}
            color={CATEGORY_COLORS[row.category]}
            onClick={(e) => {
              e.stopPropagation()
              onSelect(row)
            }}
            onPointerOver={() => {
              document.body.style.cursor = 'pointer'
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'auto'
            }}
          />
        )
      })}
    </Instances>
  )
}

export function HybridDemo() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [selected, setSelected] = useState<MetricRow | null>(null)
  const [ready, setReady] = useState(false)
  const [debounced, setDebounced] = useState('')

  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(query.trim().toLowerCase()), 120)
    return () => window.clearTimeout(t)
  }, [query])

  const filtered = useMemo(() => {
    return ALL_ROWS.filter((r) => {
      if (category !== 'all' && r.category !== category) return false
      if (!debounced) return true
      const hay = `${r.hospital} ${r.province} ${r.diagnosis} ${r.id}`.toLowerCase()
      return hay.includes(debounced)
    })
  }, [debounced, category])

  const onSelect = useCallback((row: MetricRow) => setSelected(row), [])

  return (
    <div className="viewport" style={{ display: 'grid', gridTemplateRows: 'auto 1fr', height: '100%' }}>
      <div className="filter-strip">
        <input
          type="search"
          placeholder="Search hospital, diagnosis, id…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search rows"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category | 'all')}
          aria-label="Filter category"
        >
          <option value="all">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <span className="filter-stat">
          showing {filtered.length.toLocaleString()} / {ALL_ROWS.length.toLocaleString()} rows
        </span>
      </div>
      <div className="viewport-canvas" style={{ position: 'relative' }}>
        {!ready && <LoadingOverlay label="Linking 2D filters → 3D field…" />}
        <Canvas
          camera={{ position: [24, 16, 30], fov: 40 }}
          dpr={[1, 1.6]}
          onCreated={() => setReady(true)}
          gl={{ antialias: true }}
        >
          <Suspense fallback={null}>
            <color attach="background" args={['#070a12']} />
            <fog attach="fog" args={['#070a12', 30, 85]} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[18, 28, 8]} intensity={1.15} />
            <pointLight position={[-12, 10, -8]} color="#ff2d95" intensity={0.55} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
              <planeGeometry args={[90, 90]} />
              <meshStandardMaterial color="#0a1020" />
            </mesh>
            <gridHelper args={[70, 70, '#12304a', '#0d1a2c']} position={[0, 0.01, 0]} />
            {filtered.length > 0 ? (
              <FilteredField rows={filtered} onSelect={onSelect} />
            ) : null}
            <ContactShadows opacity={0.4} scale={80} blur={2.2} far={18} />
            <OrbitControls makeDefault enableDamping maxPolarAngle={Math.PI / 2.05} target={[0, 2, 0]} />
          </Suspense>
        </Canvas>
        <div className="hud-hint">2D strip filters the instanced mesh live</div>
        <CategoryLegend />
        <SidePanel row={selected} onClose={() => setSelected(null)} />
        {filtered.length === 0 && ready && (
          <div className="loading-overlay" style={{ background: 'transparent', pointerEvents: 'none' }}>
            <span>No rows match — loosen filters</span>
          </div>
        )}
      </div>
    </div>
  )
}
