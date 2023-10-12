import React from "react"
import { Link } from 'react-router-dom';

const Sidebar=()=> {
  return(
  <div className="sidebarBg" style={{backgroundColor:'blue',padding:'10px'}}>
    <Link to="/page1"><button>Go to Page 1</button></Link>
    <Link to="/page2"><button>Go to Page 2</button></Link>
    <Link to="/page3"><button>Go to Page 3</button></Link>
    <Link to="/page4"><button>Go to Page 4</button></Link>
  </div>
  )
}
export default Sidebar