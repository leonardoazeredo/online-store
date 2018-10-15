import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className='product-list-item'>
      <h3>{props.name}</h3>
      <img
        height={100}
        title={props.name}
        src={`/products/${props.image}`}
        alt={props.name}
      />
      <div>{props.description}</div>
      <div>{props.price}</div>
      <div>
        <button onClick={() => props.addToCart(props)}>Add to cart</button>
      </div>
    </div>
  )
}


