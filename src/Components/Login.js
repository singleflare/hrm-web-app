import React from "react"

const Login=()=>{
  return(
    <div className="Login">
      <form action="" class="LoginForm" id="login">
        <div className="Username">
          <label className="UsernameLabel" for="username">Username</label>
          <input className="UsernameInput" id="username" type="text"></input>
        </div>
        <div className="Password">
          <label className="PasswordLabel" for="password">Password</label>
          <input className="PasswordInput" id="password" type="text"></input>
        </div>
        <button type="submit" form="login" className="LoginBtn">Login</button>
      </form>
      <a>Reset username/password</a>
      <a>Not registered?</a>
    </div>
  )
}

export default Login