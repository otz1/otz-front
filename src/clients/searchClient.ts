const selectSearchClientHost = () => {
  // todo production and staging servers
  if (process.env.REACT_APP_ENVIRONMENT == 'prod') {
    return 'otzbe.otzaf.org'
  }
  return 'otzbe.qa.otzaf.org'
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