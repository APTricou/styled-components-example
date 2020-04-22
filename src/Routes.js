import React from 'react'
import {Route, Switch, Router, Redirect} from 'react-router-dom'
import {Page1, Page2} from './components'
import {history} from './utils'

const Routes = function (props) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}
export default Routes
