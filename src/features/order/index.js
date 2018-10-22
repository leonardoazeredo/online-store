import React from 'react'

import fetchapi from '../../modules/fetch-api'

class Order extends React.Component {
  state = {
    order: null
  }

  componentDidMount() {
    fetchapi(
      'get',
      `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`
    ).then(json => {
      this.setState({ order: json })
    })
  }

  formatOrder(qty,price){
    const formatedPrice = parseFloat(qty) * parseFloat(price)
    return formatedPrice.toFixed(2)
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order

    return (
      <div>
        <h3>Order info:</h3>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <ul>
          {
            order_items && order_items.map(
              (item) => {
                const { product, qty, product: { name, image, price } } = item
                return (
                  <li>
                    <img src={image} width={32} alt={name} />
                    {name}
                    ({qty} @ ${price} = ${this.formatOrder(qty, price)})
                  </li>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }

  render(){
    const { order } = this.state
    return(
      <div>
        {
          order ? this.renderOrder() : "Loading..."
        }
      </div>
    )
  }

}

export default Order