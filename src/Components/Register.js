import React from "react"

const Register=()=>{
  return(
    <div className="Login">
      <form action="" class="LoginForm">
        <div className="Username">
          <label className="UsernameLabel" for="name">Username</label>
          <input className="UsernameInput" type="text"></input>
        </div>
        <div className="Password">
          <label className="PasswordLabel" for="name">Password</label>
          <input className="PasswordInput" type="text"></input>
        </div>
      </form>
    </div>
  )
}

export default Register