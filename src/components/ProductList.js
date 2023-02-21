import React from 'react'
import ProductCart from './ProductCart'

const ProductList = () => {

    const producData = [
        {title : "All Bag", img: `https://im.whatshot.in/img/2019/Aug/whatsapp-image-2019-08-12-at-65435-pm-cropped-1565674391.jpg`},
        {title : "Vanity Pouch", img: `https://cdn.shopify.com/s/files/1/2690/0106/products/DSC00048_600x.jpg?v=1656858540`},
        {title : "Tote Bag", img: `https://cdn-images.farfetch-contents.com/17/22/20/06/17222006_35002577_1000.jpg`},
        {title : "Duffle Bag", img: `https://m.economictimes.com/thumb/msid-95741610,width-1920,height-2363,resizemode-4,imgsize-275364/duffle-.jpg`},
        {title : "Laptop Sleeve", img: `https://rukminim1.flixcart.com/image/416/416/kyt0ya80/bag/0/c/h/11-laptop-sleeve-case-15-6-16-inch-waterproof-bag-tablet-handle-original-imagayhk9bk2hqz7.jpeg?q=70`},
        {title : "Hand Bag", img: `https://qph.cf2.quoracdn.net/main-qimg-9bf65e8fd78a9b6b718f5b5e7bcbe5f8-lq`},
        {title : "Sling Bag", img: `https://cf.shopee.ph/file/e4bf057fe8ca88f2daffe7a3c1f4c2cf`},
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
