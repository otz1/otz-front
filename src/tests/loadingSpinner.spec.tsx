import React from 'react'
import { SearchPage } from '../pages/SearchPage/SearchPage'
import { render, fireEvent, wait } from '@testing-library/react'

it('displays the loading spinner on a search query', async () => {
  // when we render the page
  const page = render(<SearchPage/>)
  
  // there is no loading spinner
  expect(page.queryByTestId('loading-spinner')).toBe(null)

  // given we input a search query and submit it
  const searchInputField = page.getByTestId('search-bar-field')
  fireEvent.change(searchInputField, {
    target: {
      value: 'multiple'
    }
  })
  fireEvent.click(page.getByTestId('submit-search-query-btn'))
  
  // then we expect the loading spinner to display
  expect(page.queryByTestId('loading-spinner')).not.toBe(null)
})