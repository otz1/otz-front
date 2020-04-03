const selectSearchClientHost = () => {
  // todo production and staging servers
  return 'otzbe.otzaf.org'
}

const SearchClient = {
  Host: selectSearchClientHost(),
  
  search: async (query: string) => {
    const response = await fetch(`https://${SearchClient.Host}/search?query=${query}`, {
      method: 'GET',
      headers: {
        // TODO send the site code header.
      }
    })
    const results = await response.json()
    return results
  }
}

export {
  SearchClient
}