import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <>

    <div className="newsletter">
        <div className="newsletter_box">
            <div className="newsletter_box_heading">
                <h1> Get Exclusive Offers on Your Email </h1>
            </div>

            <div className="newsletter_box_info">
                <p> Subscribe to our newletter and stay updated </p>
            </div>

            <div className='newsletter_box_email'>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
            

        </div>
        
      
    </div>
    </>
  )
}

export default Newsletter
