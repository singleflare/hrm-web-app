import React from "react"
import './styles.css'
import Button from './Button'
import { Link } from 'react-router-dom';

const TopNavBar=()=> {
  return(
  <div className='NavBar'>
    <ul className='NavList'>
      <Link to='/'><li className="NavItem"><Button>Home</Button></li></Link>
      <Link to='/employees'><li className="NavItem"><Button>Employees</Button></li></Link>
      <Link to='/about'><li className="NavItem"><Button>About</Button></li></Link>
    </ul>
    <ul className='NavList'>
      <Link to='/login'><li className="NavItem"><Button>Login</Button></li></Link>
      <Link to='/register'><li className="NavItem"><Button>Register</Button></li></Link>
    </ul>
  </div>
  )
}

export default TopNavBar