import React from 'react';
import './HeroImg2Styles.css';
import IntroImg2 from "../assets/tanner-van-dera-oaQ2mTeaP7o-unsplash.jpg"

const HeroImg2 = () => {
  return (
    <div className='hero2'>
        <div className='mask2'>
          <img className='intro-img2' src={IntroImg2} alt="IntroImg2"/>
        </div>
        <div className='content2'>
          <h2>Contact Us</h2>
        </div>
    </div>
  )
}

export default HeroImg2