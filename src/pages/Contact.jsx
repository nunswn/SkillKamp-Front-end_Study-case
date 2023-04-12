import React from 'react';
import { useEffect } from 'react';

import './Contact.css'

function Contact() {

  useEffect(() => {
    document.title = 'Contact | happy kids';
  }, []); 

  return (
    <div>
      <h2>Contact Us</h2>
      <div>
        <p className='head'>VISIT US</p>
        <p>500 Terry Francois St.</p>
        <p>San Francisco, CA 94158</p>
        <p>123-456-7890</p>
      </div>
      <div>
        <p className='head'>OPENING HOURS</p>
        <p>Mon - Fri: 7am - 10pm</p>
        <p>​Saturday: 8am - 10pm</p>
        <p>​Sunday: 8am - 11pm</p>
      </div>
      <div>
        <p className='head'>CUSTOMER SERVICE</p>
        <p>1-800-000-000</p>
        <p>123-456-7890</p>
        <p>info@mysite.com</p>
      </div>
      <div>
        {/* <p>
        FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE
        </p> */}
      </div>
    </div>
  )
}

export default Contact
