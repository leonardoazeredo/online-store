import React, {Component}from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Router from './router'

import './index.css' 

const Navigation = ({cart}) => (
  <nav>
    <ul className="top-menu">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/cart'>Cart
        { 
          cart === undefined 
            ? null 
            : cart.length > 0 
              ? `(${cart.reduce((acc, item)=>{ return acc + item.quantity },0)})` 
              : null
        }
        </NavLink></li>
    </ul>
  </nav>
)

class App extends Component {
  
  render(){
    return (
      <div
        className="page-container"
      >
        <Navigation {...this.props}/>
        <Router />
      </div>
  )}
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps)(App ))