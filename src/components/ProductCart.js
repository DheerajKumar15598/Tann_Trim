import React from 'react'

const ProductCart = ({title, img}) => {
  return (
    <>
    <div className='product-cart-container'>
      <div className='product-cart-box'>{img}</div>
        <p className='product-title'>{title}</p>
    </div>
    </>
  )
}

export default ProductCart
