import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <p>TANN TRIM</p>
      </div>

      <div className="icons">
        <div className="icon">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="icon">
            <i class="fa-solid fa-street-view"></i>
        </div>
        
        <div className="icon">
            <i class="fa-regular fa-bookmark"></i>
        </div>

        <div className="icon">
            <i class="fa-solid fa-bag-shopping"></i>
        </div>

      </div>
    </div>
  )
}

export default Navbar
