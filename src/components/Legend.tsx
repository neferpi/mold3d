import { CATEGORIES, CATEGORY_COLORS } from '../data/types'

export function CategoryLegend() {
  return (
    <div className="legend">
      {CATEGORIES.map((c) => (
        <span key={c} className="legend-item">
          <span className="legend-swatch" style={{ background: CATEGORY_COLORS[c] }} />
          {c}
        </span>
      ))}
    </div>
  )
}
