import React from "react"
import './styles.css'
import Button from './Button'
import { Link } from 'react-router-dom';

const TopNavBar=()=> {
  return(
  <div className="NavBar">
    <ul className='NavList'>
      <Link to='/'><li className="NavItem"><Button>Home</Button></li></Link>
      <Link to='/employees'><li className="NavItem"><Button>Employees</Button></li></Link>
      <Link to='/about'><li className="NavItem"><Button>About</Button></li></Link>
    </ul>
    <ul className='NavList'>
      <li className="NavItem"><Button>Login</Button></li>
      <li className="NavItem"><Button>Register</Button></li>
    </ul>
  </div>
  )
}
export default TopNavBar