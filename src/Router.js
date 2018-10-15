import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home-page'
import Cart from './pages/cart-page'

const routes = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/cart' component={Cart}></Route>
  </Switch>
)

export default routes
