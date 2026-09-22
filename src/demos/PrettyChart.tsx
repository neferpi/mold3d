import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text, RoundedBox } from '@react-three/drei'
import { Suspense, useMemo, useRef, useState } from 'react'
import type { Mesh } from 'three'
import { generateChartSlices } from '../data/generators'
import type { ChartSlice } from '../data/types'
import { LoadingOverlay } from '../components/LoadingOverlay'
import { CategoryLegend } from '../components/Legend'

function ExtrudedBar({
  slice,
  index,
  total,
  selected,
  onSelect,
}: {
  slice: ChartSlice
  index: number
  total: number
  selected: boolean
  onSelect: () => void
}) {
  const ref = useRef<Mesh>(null)
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  const radius = 4.2
  const x = Math.cos(angle) * radius
  const z = Math.sin(angle) * radius
  const h = 1.2 + slice.value / 28

  useFrame((_, dt) => {
    if (!ref.current) return
    const target = selected ? 1.12 : 1
    ref.current.scale.x += (target - ref.current.scale.x) * Math.min(1, dt * 8)
    ref.current.scale.z = ref.current.scale.x
  })

  return (
    <group position={[x, 0, z]}>
      <RoundedBox
        ref={ref}
        args={[1.35, h, 1.35]}
        radius={0.12}
        smoothness={4}
        position={[0, h / 2, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelect()
        }}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto'
        }}
      >
        <meshStandardMaterial
          color={slice.color}
          emissive={slice.color}
          emissiveIntensity={selected ? 0.45 : 0.18}
          metalness={0.55}
          roughness={0.25}
        />
      </RoundedBox>
      <Text
        position={[0, h + 0.55, 0]}
        fontSize={0.38}
        color="#e8eefc"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.2}
      >
        {slice.label}
      </Text>
      <Text
        position={[0, h + 0.15, 0]}
        fontSize={0.28}
        color={slice.color}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {String(slice.value)}
      </Text>
    </group>
  )
}

function ChartScene({
  slices,
  selected,
  setSelected,
}: {
  slices: ChartSlice[]
  selected: number | null
  setSelected: (i: number | null) => void
}) {
  const ring = useMemo(() => slices, [slices])

  return (
    <>
      <color attach="background" args={['#070a12']} />
      <fog attach="fog" args={['#070a12', 18, 42]} />
      <ambientLight intensity={0.4} />
      <spotLight position={[8, 16, 8]} angle={0.45} penumbra={0.6} intensity={1.4} />
      <pointLight position={[-8, 6, -6]} color="#ff2d95" intensity={0.7} />
      <pointLight position={[6, 4, 8]} color="#00f0ff" intensity={0.55} />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.2, 2.55, 64]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.4} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2.1, 2.1, 0.18, 64]} />
          <meshStandardMaterial color="#12182a" metalness={0.6} roughness={0.35} />
        </mesh>
        <Text position={[0, 0.35, 0]} fontSize={0.45} color="#00f0ff" anchorX="center">
          Mold³
        </Text>
        <Text position={[0, -0.05, 0]} fontSize={0.22} color="#8b9bb8" anchorX="center">
          category load
        </Text>
      </Float>

      {ring.map((s, i) => (
        <ExtrudedBar
          key={s.label}
          slice={s}
          index={i}
          total={ring.length}
          selected={selected === i}
          onSelect={() => setSelected(selected === i ? null : i)}
        />
      ))}

      <OrbitControls enableDamping autoRotate autoRotateSpeed={0.6} maxPolarAngle={Math.PI / 2.1} minDistance={6} maxDistance={22} target={[0, 2, 0]} />
    </>
  )
}

export function PrettyChartDemo() {
  const slices = useMemo(() => generateChartSlices(), [])
  const [selected, setSelected] = useState<number | null>(null)
  const [ready, setReady] = useState(false)
  const active = selected !== null ? slices[selected] : null

  return (
    <div className="viewport-canvas">
      {!ready && <LoadingOverlay label="Extruding polished category chart…" />}
      <Canvas camera={{ position: [0, 9, 14], fov: 42 }} dpr={[1, 1.75]} onCreated={() => setReady(true)}>
        <Suspense fallback={null}>
          <ChartScene slices={slices} selected={selected} setSelected={setSelected} />
        </Suspense>
      </Canvas>
      <div className="hud-hint">custom R3F extruded ring chart · click a bar</div>
      <CategoryLegend />
      {active && (
        <aside className="side-panel">
          <header>
            <h2>{active.label}</h2>
            <button type="button" className="close-btn" onClick={() => setSelected(null)}>
              ×
            </button>
          </header>
          <dl className="kv">
            <dt>Load index</dt>
            <dd style={{ color: active.color }}>{active.value}</dd>
            <dt>Technique</dt>
            <dd>RoundedBox + Float</dd>
            <dt>Lib</dt>
            <dd>R3F / drei</dd>
          </dl>
        </aside>
      )}
    </div>
  )
}
