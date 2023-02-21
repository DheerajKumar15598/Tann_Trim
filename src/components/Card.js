import React from 'react'

const Card = ({title, image, price}) => {
  const Title = title.substring(0, 25);
  return (
    <>
    <div className='card-box'>
      <div className="card-img">
        <img src={image} alt="Product Image" />
      </div>
      <div className="card-textarea">
        <p className='title'>{Title.length > 15 ? `${Title}...` : Title}</p>
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
