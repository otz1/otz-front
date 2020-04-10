import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker'

import './index.css'

import { SearchPage } from './pages/SearchPage/SearchPage'
import { MainSearchPage } from './pages/SearchPage/MainSearchPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicy/PrivacyPolicyPage'

const RouteWithScroll = (children: any) => {
  return <Route {...children} onEnter={() => window.scrollTo(0, 0)}/>
}

const App = () => {
  return (
    <Router>
      <Switch>
        <RouteWithScroll exact path='/'>
          <MainSearchPage/>
        </RouteWithScroll>
        <RouteWithScroll exact path='/search'>
          <SearchPage/>
        </RouteWithScroll>
        <RouteWithScroll path='/privacy-policy'>
          <PrivacyPolicyPage/>  
        </RouteWithScroll>
      </Switch>
    </Router>
  )
}

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.REACT_APP_ENVIRONMENT
});

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()