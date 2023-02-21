import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
      <div className="logo">
        <p>TANN TRIM</p>
      </div>

      <div className="icons">
        <div className="icon">
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="icon">
            <i className="fa-solid fa-street-view"></i>
        </div>
        
        <div className="icon">
            <i className="fa-regular fa-bookmark"></i>
        </div>

        <div className="icon">
            <i className="fa-solid fa-bag-shopping"></i>
        </div>

      </div>
    </div>

    <div className="menu">
        <div>Bags</div>
        <div>Travel</div>
        <div>Accesories</div>
        <div>Gifting</div>
        <div>Jewelery</div>
      </div>
    </>
  )
}

export default Navbar
