import React from 'react'
import "./Auth.css"
import Logo from "../../img/logo.png"

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className='"WebName'>
          <h1 className="Transparent">GOD Mode</h1>
          <h6>Explore the ideas through the World</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn/>
    </div>
  )
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input className='infoInput' type="text" placeholder='First Name' name="firstname" />
          <input className='infoInput' type="text" placeholder='Last Name' name="lastname" />
        </div>

        <div>
          <input type="text" name="username" placeholder="Usernames" className="infoInput" />
        </div>

        <div >
          <input type="text" name="password" placeholder="Password" className="infoInput" />
          <input type="text" name="Confirmpas" placeholder="Confirm Password" className="infoInput" />

        </div>

        <div >
          <span style={{fontSize:"12px",margin:"auto"}}>Already have an account. Login!</span>
        </div>
        <button type="submit" className="button infoButton">Signup</button>
      </form>

    </div>
  )
}

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Auth