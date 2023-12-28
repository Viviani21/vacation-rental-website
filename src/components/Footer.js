import React from 'react';
import './FooterStyles.css';
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20}  style={{ color:'#fff',
             marginRight: "2rem"}}/>
            <div>
              <p>123 Housing Society</p>
              <p>Germany</p>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20}  style={{ color:'#fff',
             marginRight: "2rem"}}/>
              123-4567890</h4>
          </div>
          < div className='email'>
            <h4><FaMailBulk size={20}  style={{ color:'#fff',
             marginRight: "2rem"}}/>
              info@mail.com
              </h4>
          </div>
        </div>
        <div className='right'>
          <h4> About company</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptas, nam tempore voluptates ab temporibus fuga iure
             magni minima architecto quasi iste doloremque repellat 
            nisi aliquid ea eveniet inventore suscipit quod!
          </p>
          <div className='social'>
          <FaFacebook size={30}  style={{ color:'#fff',
             marginRight: "1rem"}}/>
          <FaTwitter size={30}  style={{ color:'#fff',
             marginRight: "1rem"}}/>
          <FaLinkedin size={30}  style={{ color:'#fff',
             marginRight: "1rem"}}/>
          </div>


        </div>
      </div>
        
        
    </div>
  )
}

export default Footer