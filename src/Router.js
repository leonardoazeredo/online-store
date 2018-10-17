import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home-page'
import Cart from './pages/cart-page'
import Checkout from './features/checkout'
import OrdersPage from './pages/orders-page'

const routes = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/cart' component={Cart}></Route>
    <Route exact path='/checkout' component={Checkout}></Route>
    <Route exact path='/orders/:id' component={OrdersPage}></Route>
  </Switch>
)

export default routes
