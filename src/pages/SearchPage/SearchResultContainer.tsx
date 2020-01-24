import React from 'react'

import { InformationPane } from "./InformationPane"
import { ResultBox } from "components/ResultBox/ResultBox"
import { 
  SearchResult as SearchResultModel
} from 'model/model'

interface SearchResultContainerProps {
  searchResult: SearchResultModel
}

const SearchResultContainer = ({searchResult}: SearchResultContainerProps) => {
  const {measurements, results} = searchResult

  return (
    <>
      <InformationPane measurements={measurements} />
      <ResultBox results={results} />
    </>
  )
}

export {
  SearchResultContainer
}