import React from "react"
import { Link } from 'react-router-dom';
import Button from './Button'

const Sidebar=()=> {
  return(
  <div className="sidebarBg" style={{backgroundColor:'blue'}}>
    <Link to="/"><Button>Home</Button></Link>
    <Link to="/employees"><button>Employees</button></Link>
    <Link to="/about"><button>About</button></Link>
  </div>
  )
}
export default Sidebar