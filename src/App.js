 import React, { useEffect } from 'react'
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeScreen from './pages/Home/HomeScreen';
import './App.css'
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectedUser } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "./Firebase"
 
 const App = () => {
   const user=useSelector(selectedUser)
 const dispatch=useDispatch();
 useEffect(()=>{
  const unSubcribe=onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }
      else{
        dispatch(logout())
      }
  })
  return unSubcribe;
 },[dispatch])
 

   return (
 <>
   <div className='app'>
     <BrowserRouter>
      {
        !user ?  <Login />:
        <Routes>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/' element={<HomeScreen />}></Route>
        </Routes>
      }
     </BrowserRouter>
   </div>
 </>
   )
 }
 
 export default App