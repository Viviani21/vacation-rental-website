import React from 'react';
import './HeroImg2.css';
import IntroImg from "../assets/tanner-van-dera-oaQ2mTeaP7o-unsplash.jpg"
import {Link} from 'react-router-dom';

const HeroImg2 = () => {
  return (
    <div className='hero2'>
    <div className='mask2'>
      <img className='intro-img2' src={IntroImg} alt="IntroImg"/>
    </div>
    <div className='content2'>
      <h2>Contact Us</h2>
      {/* <div>
        <Link to="/rentals" className='btn'>RENTALS</Link>
        <Link to="/contact" className='btn btn-light'>CONTACT</Link>
      </div> */}
    </div>
  </div>
  )
}

export default HeroImg2