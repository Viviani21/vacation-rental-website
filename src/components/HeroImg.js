import React from 'react'
import './HeroImg.css';
import IntroImg from "../assets/alexandre-chambon-aapSemzfsOk-unsplash.jpg"
import {Link} from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt="IntroImg"/>
      </div>
      <div className='content'>
        <h2>"Dreamy vacation accommodations for unforgettable moments."</h2>
        <div>
          <Link to="/rentals" className='btn'>RENTALS</Link>
          <Link to="/contact" className='btn btn-light'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg;