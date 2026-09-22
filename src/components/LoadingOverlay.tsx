interface Props {
  label?: string
}

export function LoadingOverlay({ label = 'Molding rows into space…' }: Props) {
  return (
    <div className="loading-overlay">
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className="spinner" />
        <span>{label}</span>
      </div>
    </div>
  )
}
