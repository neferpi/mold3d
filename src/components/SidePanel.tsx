import type { MetricRow } from '../data/types'
import { CATEGORY_COLORS } from '../data/types'

interface Props {
  row: MetricRow | null
  onClose: () => void
  title?: string
}

export function SidePanel({ row, onClose, title = 'Oracle-ish row' }: Props) {
  if (!row) return null
  const color = CATEGORY_COLORS[row.category]

  return (
    <aside className="side-panel" role="dialog" aria-label={title}>
      <header>
        <div>
          <h2>{title}</h2>
          <div style={{ marginTop: 6 }}>
            <span className="cat-pill" style={{ color, borderColor: color }}>
              {row.category}
            </span>
          </div>
        </div>
        <button type="button" className="close-btn" onClick={onClose} aria-label="Close">
          ×
        </button>
      </header>
      <dl className="kv">
        <dt>ID</dt>
        <dd>{row.id}</dd>
        <dt>Hospital</dt>
        <dd>{row.hospital}</dd>
        <dt>Province</dt>
        <dd>{row.province}</dd>
        <dt>Diagnosis</dt>
        <dd>{row.diagnosis}</dd>
        <dt>Metric</dt>
        <dd>{row.metric}</dd>
        <dt>Beds</dt>
        <dd>{row.beds}</dd>
        <dt>Lat / Lng</dt>
        <dd>
          {row.lat.toFixed(3)}, {row.lng.toFixed(3)}
        </dd>
        <dt>Timestamp</dt>
        <dd style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
          {row.timestamp.replace('T', ' ').slice(0, 16)} Z
        </dd>
      </dl>
    </aside>
  )
}
