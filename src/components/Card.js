import React from 'react'

const Card = ({title, image, price}) => {
  const shortTitle = title.toString()
  return (
    <>
    <div className='card-box'>
      <div className="card-img">{image}</div>
      <div className="card-textarea">
        <p className='title'>{title}</p>
        <span className='price'>Rs. {price}</span>
        <span className='off'>(50% off)</span>
        <span className="bag-logo">
        <i className="fa-solid fa-cart-plus"></i>
        </span>
      </div>
    </div>
    </>
  )
}

export default Card
