import React, { useEffect, useState } from 'react'
import './nav.css'
import {Link} from 'react-router-dom'


const Nav = () => {
   const [show,setshow]=useState(false);
   const transsitionNavbar=()=>{
      if(window.scrollY>100){
         setshow(true);
      }
      else{
         setshow(false);
      }
   }
   useEffect(()=>{
      window.addEventListener("scroll",transsitionNavbar);
      return ()=>window.removeEventListener("scroll",transsitionNavbar)
   },[])
  return (
     <nav className={show?'nav-black':""}>
        <div className="nav-contents">
         <Link to="/">
            <img src=" https://pngimg.com/uploads/netflix/netflix_PNG12.png" alt="" className='nav-logo'/></Link>
            <Link to="/profile">
            <img src="https://th.bing.com/th/id/OIP.i2HBuWmNU78kbh4kUkDr7gAAAA?w=213&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='nav-avatar'/>
            </Link>
        </div>
     </nav>
  )
}

export default Nav