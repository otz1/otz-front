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
  query: string
  results: Result[]
  measurements: SearchMeasurement
  numPages: number
  searchTerms: string[]
}