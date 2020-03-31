export interface Result {
  title: string
  snippet: string
  href: string
  ranking: number
  thumbnailSource: string
  imageSource: string
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