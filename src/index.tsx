import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import './index.css'

import { SearchPage } from './pages/SearchPage/SearchPage'

const routes = () => {
  return (
    <>
      <Route path='/'>
        <SearchPage/>
      </Route>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Switch>        
        {routes()}
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()