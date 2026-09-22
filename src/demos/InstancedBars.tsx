import { Canvas } from '@react-three/fiber'
import { ContactShadows, Instances, Instance, OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useMemo, useState, useCallback } from 'react'
import { generateMetricRows, barGridPositions } from '../data/generators'
import { CATEGORY_COLORS, type MetricRow } from '../data/types'
import { SidePanel } from '../components/SidePanel'
import { CategoryLegend } from '../components/Legend'
import { LoadingOverlay } from '../components/LoadingOverlay'
import * as THREE from 'three'

const ROW_COUNT = 900

function BarField({
  rows,
  onSelect,
}: {
  rows: MetricRow[]
  onSelect: (row: MetricRow) => void
}) {
  const positions = useMemo(() => barGridPositions(rows.length, 30), [rows.length])

  return (
    <Instances limit={rows.length} range={rows.length} castShadow receiveShadow>
      <boxGeometry args={[0.85, 1, 0.85]} />
      <meshStandardMaterial roughness={0.35} metalness={0.45} />
      {positions.map((p) => {
        const row = rows[p.i]!
        const h = 0.4 + (row.metric / 100) * 8
        const color = CATEGORY_COLORS[row.category]
        return (
          <Instance
            key={row.id}
            position={[p.x, h / 2, p.z]}
            scale={[1, h, 1]}
            color={color}
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

function Scene({ onSelect }: { onSelect: (row: MetricRow) => void }) {
  const rows = useMemo(() => generateMetricRows(ROW_COUNT), [])

  return (
    <>
      <color attach="background" args={['#070a12']} />
      <fog attach="fog" args={['#070a12', 35, 90]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[20, 30, 10]} intensity={1.2} castShadow />
      <pointLight position={[-15, 12, -10]} intensity={0.6} color="#ff2d95" />
      <pointLight position={[10, 8, 15]} intensity={0.5} color="#00f0ff" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color="#0a1020" metalness={0.2} roughness={0.85} />
      </mesh>
      <gridHelper args={[60, 60, '#12304a', '#0d1a2c']} position={[0, 0.01, 0]} />
      <BarField rows={rows} onSelect={onSelect} />
      <ContactShadows opacity={0.45} scale={70} blur={2.5} far={20} />
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        maxPolarAngle={Math.PI / 2.05}
        minDistance={8}
        maxDistance={70}
        target={[0, 2, 0]}
      />
      <Environment preset="city" />
    </>
  )
}

export function InstancedBarsDemo() {
  const [selected, setSelected] = useState<MetricRow | null>(null)
  const [ready, setReady] = useState(false)
  const onSelect = useCallback((row: MetricRow) => setSelected(row), [])

  return (
    <div className="viewport-canvas">
      {!ready && <LoadingOverlay label="Instancing 900 DB rows…" />}
      <Canvas
        shadows
        camera={{ position: [22, 18, 28], fov: 42 }}
        dpr={[1, 1.75]}
        onCreated={() => {
          setReady(true)
          // Ensure three color management is sane
          THREE.ColorManagement.enabled = true
        }}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <Scene onSelect={onSelect} />
        </Suspense>
      </Canvas>
      <div className="hud-hint">drag to orbit · scroll zoom · click a bar</div>
      <CategoryLegend />
      <SidePanel row={selected} onClose={() => setSelected(null)} title="Selected flat row" />
    </div>
  )
}
