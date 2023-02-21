import React from 'react'
import ProductCart from './ProductCart'

const ProductList = () => {
    const producData = [
        {title : "All Bag", img: ''},
        {title : "Vanity Pouch", img: ''},
        {title : "Tote Bag", img: ''},
        {title : "Duffle Bag", img: ''},
        {title : "Laptop Sleeve", img: ''},
        {title : "Hand Bag", img: ''},
        {title : "Sling Bag", img: ''},
        {title : "Bucket", img: ''},
    ]
  return (
    <>
    <div className='producs'>
        {
            producData.map((data, index) => {
                return <ProductCart title={data.title} img={data.img} key={index}/>
            })
        }
        
    </div>
    </>
  )
}

export default ProductList
