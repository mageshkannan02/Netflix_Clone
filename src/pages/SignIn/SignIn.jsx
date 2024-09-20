import React, { useState } from 'react'
import './signin.css'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {auth} from '../../Firebase'

const SignIn = () => {
    const [email,setEmail]=useState("");
    const [ password,setPassword]=useState("");
    const register=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((
            authUser
        )=>{
            console.log(authUser);
            
        }).catch((err)=>{
           alert(err.message)
            
        })

    }
    const SignIn=(e)=>{
        e.preventDefault();
         signInWithEmailAndPassword(auth,email,password).then((
            authUser
        )=>{
            console.log(authUser);
            
        }).catch((err)=>{
           alert(err.message)
            
        })
    }
  return (
    <>
     <div className="signIn">
        <form action="">
            <h1 >Sign In</h1>
            <input type="email" placeholder='Email' onChange={e=>setEmail(e.target.value)} value={email}/>
            <input type="passsword" placeholder='Password' onChange={e=>setPassword(e.target.value)} value={password} />
            <button type='submit' onClick={SignIn}>Sign In</button>
            <h4>
                <span className='signIn-gray'>New to Netflix? </span><span className="signIn-link" onClick={register}>Sign up Now</span>
            </h4>
        </form>
     </div>
    </>
  )
}

export default SignIn