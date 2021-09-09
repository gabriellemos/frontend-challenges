import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from '../Home'
import OrderSummary from '../OrderSummary'

import FloatButton from './components/FloatButton'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/order-summary" exact>
          <OrderSummary />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
      <FloatButton />
    </Router>
  )
}
