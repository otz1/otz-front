import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as Sentry from '@sentry/browser';
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

Sentry.init({dsn: "https://84a869b169d54966870f599e2f34892a@sentry.io/5188279"});

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()