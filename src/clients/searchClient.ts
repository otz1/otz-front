const SearchClient = {
  Port: 8080,
  Host: 'localhost',
  
  search: async (query: string) => {
    const response = await fetch(`http://${SearchClient.Host}:${SearchClient.Port}/search?query=${query}`, {
      method: 'GET',
    })
    const results = await response.json()
    return results
  }
}

export {
  SearchClient
}