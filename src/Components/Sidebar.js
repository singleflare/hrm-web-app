import React from "react"
import { Link } from 'react-router-dom';

const Sidebar=()=> {
  return(
  <div className="sidebarBg" style={{backgroundColor:'blue'}}>
    <Link to="/employees"><button>Go to Page 1</button></Link>
    <Link to="/about"><button>Go to Page 2</button></Link>
  </div>
  )
}
export default Sidebar