import React from 'react'

function Header() {
  return (
    <div className='Head'>
    <div className='navbar'>
      <div>
           <h2 className='firsth2' > Start Bootstrap</h2>
      </div>
      <div className='myul'>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
   

    </div>

    <div className='body'>
      <h1>Your Favorite Place for Free <br></br> Bootstrap Themes</h1>
      <p>Start Bootstrap can help you build better websites using the Bootstrap framework! Just <br></br> download a theme and start customizing, no strings attached!</p>
      <button>FIND OUT MORE</button>
    </div>
     
   </div>
  )
}

export default Header