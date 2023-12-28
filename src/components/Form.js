import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div>
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Your Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="7" placeholder='Type your message here'/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form