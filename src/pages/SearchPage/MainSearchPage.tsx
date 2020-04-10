import React, { useState } from 'react'
import './SearchPage.css'

import { SearchBar } from 'components/SearchBar/SearchBar'
import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'
import { Redirect } from 'react-router-dom'

const MainSearchPage = () => {
  const [query, setQuery] = useState('')

  const handleProcessSearch = async (query: string) => {
    setQuery(query)
  }

  return (
    <>
      { query && <Redirect push to={`/search?query=${query}`} /> }
      <Header>
        <SearchBar processSearchHandler={handleProcessSearch} />
      </Header>
      <Footer/>
    </>
  )
}

export {
    MainSearchPage
}
