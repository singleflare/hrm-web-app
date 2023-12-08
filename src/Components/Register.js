import React from "react"

const Register=()=>{
  return(
    <div className="Register">
      <form action="" class="RegisterForm">
        <label className="FullNameLabel" for="fullname">Full Name</label>
        <input className="FullNameInput" id="fullname" type="text"></input>
        <label className="BirthdateLabel" for="birthdate">Birth Date</label>
        <input className="BirthdateInput" id="birthdate" type="date"></input>
        <label className="UsernameLabel" for="username">Username</label>
        <input className="UsernameInput" id="username" type="text"></input>
        <label className="PasswordLabel" for="password">Password</label>
        <input className="PasswordInput" id="password" type="password"></input>
        <button type="submit" form="login" className="LoginBtn">Login</button>
      </form>
    </div>
  )
}

export default Register