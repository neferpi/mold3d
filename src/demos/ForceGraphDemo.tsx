import { useEffect, useRef, useState } from 'react'
import ForceGraph3D, { type ForceGraph3DInstance } from '3d-force-graph'
import SpriteText from 'three-spritetext'
import type { Object3D } from 'three'
import { generateGraphData } from '../data/generators'
import { LoadingOverlay } from '../components/LoadingOverlay'
import type { GraphNode } from '../data/types'

const GROUP_COLOR: Record<GraphNode['group'], string> = {
  hospital: '#00f0ff',
  diagnosis: '#ff2d95',
  category: '#a855f7',
}

export function ForceGraphDemo() {
  const hostRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<ForceGraph3DInstance | null>(null)
  const [ready, setReady] = useState(false)
  const [selected, setSelected] = useState<GraphNode | null>(null)
  const data = useRef(generateGraphData()).current

  useEffect(() => {
    const el = hostRef.current
    if (!el) return

    const Graph = new ForceGraph3D(el, { controlType: 'orbit' })
      .graphData(data)
      .backgroundColor('#070a12')
      .showNavInfo(false)
      .nodeId('id')
      .nodeLabel((n) => `${(n as GraphNode).name} · ${(n as GraphNode).group}`)
      .nodeVal((n) => (n as GraphNode).val)
      .nodeColor((n) => GROUP_COLOR[(n as GraphNode).group])
      .nodeOpacity(0.92)
      .linkWidth((l) => Math.max(0.4, ((l as { weight?: number }).weight ?? 1) * 0.35))
      .linkColor(() => 'rgba(0,240,255,0.28)')
      .linkOpacity(0.55)
      .linkDirectionalParticles(2)
      .linkDirectionalParticleWidth(1.2)
      .linkDirectionalParticleSpeed(0.006)
      .onNodeClick((node) => setSelected(node as GraphNode))
      .nodeThreeObject((node) => {
        const n = node as GraphNode
        const sprite = new SpriteText(n.name)
        sprite.color = GROUP_COLOR[n.group]
        sprite.textHeight = n.group === 'hospital' ? 3.2 : 2.4
        sprite.backgroundColor = 'rgba(7,10,18,0.55)'
        sprite.padding = 2
        sprite.borderRadius = 3
        return sprite as unknown as Object3D
      })
      .nodeThreeObjectExtend(true)

    Graph.d3Force('charge')?.strength(-180)
    Graph.d3Force('link')?.distance(48)

    graphRef.current = Graph
    setReady(true)

    const resize = () => {
      if (!hostRef.current) return
      Graph.width(hostRef.current.clientWidth)
      Graph.height(hostRef.current.clientHeight)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    return () => {
      ro.disconnect()
      Graph._destructor?.()
      graphRef.current = null
    }
  }, [data])

  return (
    <div className="viewport-canvas">
      {!ready && <LoadingOverlay label="Laying out hospital ↔ diagnosis graph…" />}
      <div ref={hostRef} style={{ width: '100%', height: '100%' }} />
      <div className="hud-hint">hospitals · diagnoses · categories — drag nodes</div>
      <div className="legend">
        {(
          [
            ['hospital', 'Hospital'],
            ['diagnosis', 'Diagnosis'],
            ['category', 'Category'],
          ] as const
        ).map(([g, label]) => (
          <span key={g} className="legend-item">
            <span className="legend-swatch" style={{ background: GROUP_COLOR[g] }} />
            {label}
          </span>
        ))}
      </div>
      {selected && (
        <aside className="side-panel">
          <header>
            <h2>{selected.name}</h2>
            <button type="button" className="close-btn" onClick={() => setSelected(null)}>
              ×
            </button>
          </header>
          <dl className="kv">
            <dt>Group</dt>
            <dd style={{ color: GROUP_COLOR[selected.group] }}>{selected.group}</dd>
            <dt>Weight</dt>
            <dd>{selected.val}</dd>
            <dt>ID</dt>
            <dd>{selected.id}</dd>
          </dl>
        </aside>
      )}
    </div>
  )
}
