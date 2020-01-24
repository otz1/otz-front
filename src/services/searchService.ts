import { SearchClient } from 'clients/searchClient'

const SearchService = {
  // TODO types for result
  processSearch: async (query: string) => {
    const searchQuery: string = encodeURIComponent(query.trim())

    const response = await SearchClient.search(searchQuery)
    if (response && response.results) {
      const { results, measurements } = response

      const resultsPerPage = 15
      const numPages = Math.ceil(results.length / resultsPerPage)

      return response
    }
  }
}

export {
  SearchService
}