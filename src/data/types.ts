export type Category =
  | 'Urgencias'
  | 'Cirugía'
  | 'Oncología'
  | 'Pediatría'
  | 'Cardiología'
  | 'Neurología'

export interface MetricRow {
  id: string
  hospital: string
  province: string
  category: Category
  diagnosis: string
  metric: number
  beds: number
  lat: number
  lng: number
  timestamp: string
}

export interface GeoPoint {
  id: string
  name: string
  province: string
  lat: number
  lng: number
  value: number
  category: Category
}

export interface GraphNode {
  id: string
  name: string
  group: 'hospital' | 'diagnosis' | 'category'
  val: number
}

export interface GraphLink {
  source: string
  target: string
  weight: number
}

export interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
}

export interface ChartSlice {
  label: string
  value: number
  color: string
}

export const CATEGORIES: Category[] = [
  'Urgencias',
  'Cirugía',
  'Oncología',
  'Pediatría',
  'Cardiología',
  'Neurología',
]

export const CATEGORY_COLORS: Record<Category, string> = {
  Urgencias: '#00f0ff',
  Cirugía: '#ff2d95',
  Oncología: '#a855f7',
  Pediatría: '#34d399',
  Cardiología: '#f43f5e',
  Neurología: '#fbbf24',
}
