import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {

  const [data, setData] = useState([])

  const getAPI = async () => {
    await axios.get(`https://fakestoreapi.com/products`,{
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
  })
  .then((response) => {
    const data = response.data;
    setData(data);
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
  }

  useEffect(()=>{
    getAPI()
  },[])

  
  return (
    <>
      <div className="card-container">
      {
        data.map((data) => {
          const {title, price, id, image, rating} = data
          const Title = title.substring(0, 25);
          return (
            <div className='card-box'key={id}>
              <span className="bookmark"><i className="fa-sharp fa-solid fa-bookmark fa-lg"></i></span>
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
          )
        })
      }
      </div>
    </>
  )
}

export default Card
