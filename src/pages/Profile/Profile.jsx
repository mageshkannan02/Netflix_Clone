import React from 'react'
import {useSelector} from 'react-redux'
import { selectedUser } from '../../features/userSlice'
import Nav from "../../components/nav/Nav"
import './profile.css'
import {signOut} from "firebase/auth"
import {auth} from "../../Firebase"

const Profile = () => {
  const user=useSelector(selectedUser)
  const logOut=()=>{
    signOut(auth)
  }
  return (
     <>
     <Nav />
     <div className="profile">
       
        <div className="profile-body">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img src="https://th.bing.com/th/id/OIP.i2HBuWmNU78kbh4kUkDr7gAAAA?w=213&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
              <h3>Plans</h3>
                 <button className="profile-signOut" onClick={logOut}>Sign Out</button>
            </div>
            
          </div>
        </div>
        </div>
     </div>
     </>
  )
}

export default Profile