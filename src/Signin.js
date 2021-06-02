import React from 'react'
import './Signin.css'

function Signin() {
  return (
    <div className="signup">
      <div className="header_logo">
        <h1>Quora</h1>
      </div>
      <form>
        <div className="signup_form_each">
          <p>Full Name </p>
          <input type="text" maxLength="20" placeholder="Full Name"/>
        </div>
        <div className="signup_form_each">
          <p>Email </p>
          <input type="text" maxLength="8" placeholder="ab123456" title="Please enter just 8 characters of your student Email." pattern="[a-z]{2}[0-9]{6}"/>
        </div>
        <div className="signup_form_each">
          <p>Password</p>
          <input type="password" placeholder="Password"/>
        </div>
        <div className="signup_form_each">
          <button className="signup_form_btn">Sign in</button>
        </div>
        
      </form>
    </div>
  )
}

export default Signin;
