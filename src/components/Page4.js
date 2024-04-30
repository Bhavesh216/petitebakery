import React from 'react'
import "./style.css";

const Page4 = () => {
  
  
  return (
    <div>
      <div className="page5">
      <div className="newsletter">
        <h2>Join Our Newsletter</h2>
        <p>
          Get the freshest Petite Palate updates and offers right to your
          inbox! Plus, enjoy 10% off on your birthday when you share the date
          with us!
        </p>
      </div>
      <div className="form">
        <form action='https://formspree.io/f/mnqewqjk' method='POST'>
        <input type="email" id="form" name='form'  placeholder="Your Email Address"  required/>
        <input type='submit' className='submitbutton' value="Submit" id='submit' name='submit'></input>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Page4
// onClick={openPopUp}