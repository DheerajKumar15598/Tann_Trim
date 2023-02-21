import React from 'react'

const ProductCart = ({title, img}) => {
  return (
    <>
    <div className='product-cart-container'>
      <div className='product-cart-box'>
        <img src={img} alt="" />
        {/* <i class="fa-solid fa-bags-shopping"></i> */}
      </div>
      <div className="product-title">
        <p>{title}</p>
      </div>
    </div>
    </>
  )
}

export default ProductCart
