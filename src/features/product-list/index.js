import React from 'react'
import { connect } from 'react-redux'

import fetchApi from '../../modules/fetch-api'
import ProductListItem from './product-list-item'

class ProductListing extends React.Component {
  componentDidMount(){
    const {loadProducts} = this.props
    fetchApi('get', "https://student-example-api.herokuapp.com/v1/products.json")
    .then((json => {
      loadProducts(json)
    }))
  }
  render() {
    const {addToCart, products, cart, removeFromCart} = this.props
    return <div className='product-listing'>
      {
         products.map(product =>
          <ProductListItem
            key={products.indexOf(product)}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
          />)
      }
    </div>
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: (products) => {
      dispatch({ type: 'LOAD', payload: products})
    },
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)