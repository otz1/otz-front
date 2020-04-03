import React from 'react'

import { InformationPane } from "./InformationPane"
import { ResultContainer } from "components/Result/ResultContainer"
import { SearchResult as SearchResultModel } from 'model/model'

interface SearchResultContainerProps {
  searchResult: SearchResultModel
}

const SearchResultContainer = ({searchResult}: SearchResultContainerProps) => {
  const {measurements, results, numPages, searchTerms} = searchResult

  return (
    <>
      { measurements.elapsedTime && <InformationPane measurements={measurements} /> }
      <ResultContainer searchTerms={searchTerms} results={results} numPages={numPages} />
    </>
  )
}

export {
  SearchResultContainer
}