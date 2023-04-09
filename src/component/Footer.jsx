import React from 'react'
import { FaFacebook, FaPinterest, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <h3>happy kids</h3>
        <div className='foot_icon'>
            <a href="https://www.facebook.com/"><FaFacebook style={{ color: "black" }}/></a>
            <a href="https://www.pinterest.com/"><FaPinterest style={{ color: "black" }}/></a>
            <a href="https://www.instagram.com/"><FaInstagram style={{ color: "black" }}/></a>
        </div>
        <div className='nav_b'>
        
        </div>
        <div className='mail_list'>
            <p>Join Our Mailing List</p>
            <input type='text' placeholder='Enter your email here*'></input>
            <button>Subcribe Now</button>
            <p>Copyright © 2023 Happy Kids.
        All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
