import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import './index.css'

import { SearchPage } from './pages/SearchPage/SearchPage'

// TODO routing if any.
const App = () => {
  return (
    <SearchPage/>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()