import React, { useState } from 'react'
import './login.css'
import SignIn from '../SignIn/SignIn'

const Login = () => {
    const [signIn,setSignIn]=useState(false)
  return (
     <>
       <div className="login">
                 <div className="login-bg">

                  <img src="https://pngimg.com/uploads/netflix/netflix_PNG12.png" alt="" className='login-logo'/> 
                   <button className='login-button' onClick={()=>setSignIn(true)}>Sign In</button>
                   <div className="login-gradient">


                   </div>
                   <div className="login-body">
                    {
                        signIn ?(<SignIn/>):(
                            <>
                            <h1>Unlimited flims, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>
                            <h3>
                                Ready to watch? Enter your email to create or restart your membership.
                            </h3>
                            <div className="login-input">
                                <form action="">
                                    <input type="email" placeholder='Email Address' />
                                    <button className='login-getstarted' onClick={()=>setSignIn(true)}>GET STARTED</button>
                                </form>
                            </div>
                            </>
                        )
                    }
                   </div>
                 </div>
       </div>
     </>
  )
}

export default Login