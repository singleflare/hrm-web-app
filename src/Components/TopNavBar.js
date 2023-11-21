import React from "react"
import './styles.css'

const TopNavBar=()=> {
  return(
  <div className="NavBar">
    <ul className='NavList'>
      <li className="NavItem">Home</li>
      <li className="NavItem">Employees</li>
      <li className="NavItem">About</li>
    </ul>
    <ul className='NavList'>
      <li className="NavItem">Login</li>
      <li className="NavItem">Register</li>
    </ul>
  </div>
  )
}
export default TopNavBar