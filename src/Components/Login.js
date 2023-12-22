import React from "react"

const Login=()=>{
  return(
    <div className="Login">
      <form action="" class="LoginForm" id="login">
        <label className="UsernameLabel" for="username">Username</label>
        <input className="UsernameInput" id="username" type="text"></input>
        <label className="PasswordLabel" for="password">Password</label>
        <input className="PasswordInput" id="password" type="password"></input>
        <button type="submit" form="login" className="LoginBtn">Login</button>
        <span>Reset username/password</span>
        <span>Not registered?</span>
      </form>
    </div>
  )
}

export default Login