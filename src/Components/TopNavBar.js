import React from "react"

const TopNavBar=()=> {
  return(
  <div
    style={{
      position:'relative',
      top:'0',
      backgroundColor:'red',
      display:'inline-block',
    }}>
    <ul className='topnav' style={{
      display:'flex'
      
    }}>
      <li>Login</li>
      <li>Register</li>
    </ul>
  </div>
  )
}
export default TopNavBar