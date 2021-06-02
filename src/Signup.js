import React, {useState} from 'react'
import './Signup.css'

function Signup() {

  const [fName,setName] = useState();
  const [password,setPassword] = useState();
  const [password1,setPassword1] = useState();
  const [email,setEmail] = useState();

  function verifyPassword() {    
    if(password !== password1) {  
       alert("Fill same password please!");  
       return false;  
    }   
    else if(password1.length < 8) {  
      alert("Fill Strong password please!");  
       return false;  
    }  
    else if(password1.length > 15) {  
      alert("Password is too long!");  
       return false;  
    }
  } 

  return (
    <div className="signup">
      <div className="header_logo">
        <h1>Quora</h1>
      </div>
      <form>

        <div className="signup_form_each">
          <p>Full Name </p>
          <input 
            type="text" 
            value={fName} 
            maxLength="20" 
            placeholder="Full Name" 
            onChange={(e) => {setName(e.target.value); console.log(e.target.value);}}
          />
        </div>

        <div className="signup_form_each">
          <p>Email </p>
          <input 
            type="text" 
            value={email} 
            maxLength="8" 
            placeholder="ab123456" 
            title="Please enter just 8 characters of your student Email." 
            pattern="[a-z]{2}[0-9]{6}" 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="signup_form_each">
          <p>Password</p>
          <input 
            type="password" 
            value={password} 
            placeholder="Password" 
            onChange={(e) => {setPassword(e.target.value); console.log(e.target.value);}}
          />
        </div>

        <div className="signup_form_each">
          <p>Confirm Password</p>
          <input 
            type="password" 
            value={password1} 
            placeholder="Confirm Password" 
            onChange={(e) => {setPassword1(e.target.value); console.log(e.target.value);}}
          />
        </div>

        <div className="signup_form_each">
          <button 
            onClick={verifyPassword} 
            cls="signup_form_btn" 
            type="submit">Sign up</button>
        </div>
        
      </form>
    </div>
  )
}

export default Signup;
