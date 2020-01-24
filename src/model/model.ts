export interface Result {
  title: string
  href: string
}

export interface SearchMeasurement {
  elapsedTime?: string
  resultCount?: number
}

export interface SearchResult {
  results: Result[]
  measurements: SearchMeasurement
  numPages: number
}