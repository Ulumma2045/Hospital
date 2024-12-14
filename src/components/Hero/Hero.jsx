import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='open'>
      <main>
        <marquee behavior="" direction="">WE ARE A BIG FAMILY</marquee>
        <div sx={{my: 15, textAlign: 'center'}}>
            <Link to='/register'>
           <button><a href="">Register</a></button>
           </Link>
           <Link to='/formcontrol'>
           <button><a href=''>Let's Start</a></button>
           </Link>
           <Link to='/post'>
           <button>Post</button>
           </Link>
        </div>
      </main>
    </div>
  )
}

export default Hero
