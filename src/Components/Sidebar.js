import React from "react"
import { Link } from 'react-router-dom';
import Button from './Button'
import './styles.css'

const Sidebar=()=> {
  return(
  <div className="sidebarBg" style={{
    backgroundColor:'blue',
    position:'relative',
    display:'inline-block'
    }}>
    <Link to="/"><Button>Home</Button></Link>
    <Link to="/employees"><Button>Employees</Button></Link>
    <Link to="/about"><Button>About</Button></Link>
  </div>
  )
}
export default Sidebar