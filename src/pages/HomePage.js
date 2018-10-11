import React from 'react'
import ProductList from '../features/ProductListing'

import data from '../data/products.json'

export default function Home(props) {
  return <div>
    <h1>Home</h1>
    <ProductList products={data.products} />
  </div>
}