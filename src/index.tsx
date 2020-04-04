import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker'

import './index.css'

import { SearchPage } from './pages/SearchPage/SearchPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicy/PrivacyPolicyPage'

const RouteWithScroll = (children: any) => {
  return <Route {...children} onEnter={() => window.scrollTo(0, 0)}/>
}

const App = () => {
  return (
    <Router>
      <Switch>
        <RouteWithScroll exact path='/'>
          <SearchPage/>
        </RouteWithScroll>
        <RouteWithScroll path='/privacy-policy'>
          <PrivacyPolicyPage/>  
        </RouteWithScroll>
      </Switch>
    </Router>
  )
}

Sentry.init({dsn: "https://84a869b169d54966870f599e2f34892a@sentry.io/5188279"});

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()