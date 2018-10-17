import React from 'react'

export default function AddButton(props) {
  return (
    <button
      onClick={() => props.addToCart(props.product)}
    >Add to cart {(props.cartItem !== undefined) ? `(${props.cartItem && props.cartItem.quantity})` : null}
    </button>
  )
}