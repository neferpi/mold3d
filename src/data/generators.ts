import {
  CATEGORIES,
  CATEGORY_COLORS,
  type Category,
  type ChartSlice,
  type GeoPoint,
  type GraphData,
  type MetricRow,
} from './types'

const HOSPITALS = [
  'Hospital Regional Málaga',
  'Virgen de la Victoria',
  'Costa del Sol',
  'Quirónsalud Málaga',
  'Hospital de Antequera',
  'Axarquía Vélez',
  'Hospital Ronda',
  'Clínica Santa Elena',
  'Hospital Serranía',
  'Centro Salud Teatinos',
  'Hospital Torremolinos',
  'Instituto Oncológico',
]

const PROVINCES = [
  'Málaga',
  'Sevilla',
  'Granada',
  'Córdoba',
  'Cádiz',
  'Almería',
  'Jaén',
  'Huelva',
]

const DIAGNOSES = [
  'Neumonía',
  'Fractura',
  'Infarto',
  'ACV',
  'Apendicitis',
  'Asma',
  'Diabetes',
  'Hipertensión',
  'Trauma',
  'Sepsis',
  'Quimioterapia',
  'Epilepsia',
]

/** Andalucia / Spain city-ish coords */
const GEO_SEEDS: Array<{ name: string; province: string; lat: number; lng: number }> = [
  { name: 'Málaga', province: 'Málaga', lat: 36.7213, lng: -4.4214 },
  { name: 'Marbella', province: 'Málaga', lat: 36.5101, lng: -4.8856 },
  { name: 'Antequera', province: 'Málaga', lat: 37.0194, lng: -4.5612 },
  { name: 'Vélez-Málaga', province: 'Málaga', lat: 36.7726, lng: -4.1004 },
  { name: 'Ronda', province: 'Málaga', lat: 36.7423, lng: -5.1665 },
  { name: 'Sevilla', province: 'Sevilla', lat: 37.3891, lng: -5.9845 },
  { name: 'Granada', province: 'Granada', lat: 37.1773, lng: -3.5986 },
  { name: 'Córdoba', province: 'Córdoba', lat: 37.8882, lng: -4.7794 },
  { name: 'Cádiz', province: 'Cádiz', lat: 36.5271, lng: -6.2886 },
  { name: 'Almería', province: 'Almería', lat: 36.8340, lng: -2.4637 },
  { name: 'Jaén', province: 'Jaén', lat: 37.7796, lng: -3.7849 },
  { name: 'Huelva', province: 'Huelva', lat: 37.2614, lng: -6.9447 },
  { name: 'Jerez', province: 'Cádiz', lat: 36.6866, lng: -6.1372 },
  { name: 'Algeciras', province: 'Cádiz', lat: 36.1408, lng: -5.4562 },
  { name: 'El Ejido', province: 'Almería', lat: 36.7763, lng: -2.8146 },
  { name: 'Motril', province: 'Granada', lat: 36.7507, lng: -3.5179 },
  { name: 'Linares', province: 'Jaén', lat: 38.0952, lng: -3.6360 },
  { name: 'Lucena', province: 'Córdoba', lat: 37.4087, lng: -4.4852 },
  { name: 'Estepona', province: 'Málaga', lat: 36.4256, lng: -5.1509 },
  { name: 'Fuengirola', province: 'Málaga', lat: 36.5441, lng: -4.6247 },
  { name: 'Torremolinos', province: 'Málaga', lat: 36.6207, lng: -4.4997 },
  { name: 'Nerja', province: 'Málaga', lat: 36.7504, lng: -3.8746 },
  { name: 'Úbeda', province: 'Jaén', lat: 38.0133, lng: -3.3705 },
  { name: 'Dos Hermanas', province: 'Sevilla', lat: 37.2829, lng: -5.9209 },
]

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function pick<T>(rng: () => number, arr: T[]): T {
  return arr[Math.floor(rng() * arr.length)]!
}

export function generateMetricRows(count = 900, seed = 42): MetricRow[] {
  const rng = mulberry32(seed)
  const rows: MetricRow[] = []
  for (let i = 0; i < count; i++) {
    const category = pick(rng, CATEGORIES)
    const hospital = pick(rng, HOSPITALS)
    const province = pick(rng, PROVINCES)
    const geo = pick(rng, GEO_SEEDS)
    rows.push({
      id: `ROW-${String(i + 1).padStart(5, '0')}`,
      hospital,
      province,
      category,
      diagnosis: pick(rng, DIAGNOSES),
      metric: Math.round(8 + rng() * 92),
      beds: Math.round(10 + rng() * 490),
      lat: geo.lat + (rng() - 0.5) * 0.15,
      lng: geo.lng + (rng() - 0.5) * 0.15,
      timestamp: new Date(Date.UTC(2026, 8, 1 + Math.floor(rng() * 20), Math.floor(rng() * 24))).toISOString(),
    })
  }
  return rows
}

export function generateGeoPoints(seed = 7): GeoPoint[] {
  const rng = mulberry32(seed)
  return GEO_SEEDS.flatMap((city, i) => {
    const n = 2 + Math.floor(rng() * 3)
    return Array.from({ length: n }, (_, j) => {
      const category = pick(rng, CATEGORIES)
      return {
        id: `GEO-${i}-${j}`,
        name: `${city.name} · ${category.slice(0, 4)}`,
        province: city.province,
        lat: city.lat + (rng() - 0.5) * 0.08,
        lng: city.lng + (rng() - 0.5) * 0.08,
        value: Math.round(20 + rng() * 180),
        category,
      }
    })
  })
}

export function generateGraphData(seed = 99): GraphData {
  const rng = mulberry32(seed)
  const hospitals = HOSPITALS.slice(0, 10)
  const diagnoses = DIAGNOSES.slice(0, 10)

  const nodes: GraphData['nodes'] = [
    ...hospitals.map((h, i) => ({
      id: `h-${i}`,
      name: h,
      group: 'hospital' as const,
      val: 12 + Math.floor(rng() * 18),
    })),
    ...diagnoses.map((d, i) => ({
      id: `d-${i}`,
      name: d,
      group: 'diagnosis' as const,
      val: 6 + Math.floor(rng() * 10),
    })),
    ...CATEGORIES.map((c, i) => ({
      id: `c-${i}`,
      name: c,
      group: 'category' as const,
      val: 8 + Math.floor(rng() * 8),
    })),
  ]

  const links: GraphData['links'] = []
  for (let i = 0; i < hospitals.length; i++) {
    const diagCount = 2 + Math.floor(rng() * 4)
    for (let k = 0; k < diagCount; k++) {
      const d = Math.floor(rng() * diagnoses.length)
      links.push({
        source: `h-${i}`,
        target: `d-${d}`,
        weight: 1 + Math.floor(rng() * 8),
      })
    }
    const cat = Math.floor(rng() * CATEGORIES.length)
    links.push({
      source: `h-${i}`,
      target: `c-${cat}`,
      weight: 2 + Math.floor(rng() * 5),
    })
  }
  for (let i = 0; i < diagnoses.length; i++) {
    const cat = Math.floor(rng() * CATEGORIES.length)
    links.push({
      source: `d-${i}`,
      target: `c-${cat}`,
      weight: 1 + Math.floor(rng() * 4),
    })
  }

  return { nodes, links }
}

export function generateChartSlices(): ChartSlice[] {
  return CATEGORIES.map((c) => ({
    label: c,
    value: 40 + Math.round(Math.random() * 120),
    color: CATEGORY_COLORS[c],
  }))
}

export function barGridPositions(count: number, cols = 30): Array<{ x: number; z: number; i: number }> {
  const rows = Math.ceil(count / cols)
  const positions: Array<{ x: number; z: number; i: number }> = []
  for (let i = 0; i < count; i++) {
    const col = i % cols
    const row = Math.floor(i / cols)
    positions.push({
      x: (col - (cols - 1) / 2) * 1.15,
      z: (row - (rows - 1) / 2) * 1.15,
      i,
    })
  }
  return positions
}

export type { Category }
