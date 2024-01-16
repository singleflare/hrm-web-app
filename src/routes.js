/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Route} from 'react-router-dom'

import EmployeeList from './Components/EmployeeList'
import Welcome from './Components/Welcome'
import About from './Components/About'
import Login from './Components/Login'
import Register from './Components/Register'

export default[
    <Route key="welcome" path="/" element={<Welcome />}/>,
    <Route key="employees" path="/employees" element={<EmployeeList name="A" age="25" position="Director"/>}/>,
    <Route key="about" path="/about" element={<About />}/>,
    <Route key="login" path="/login" element={<Login />}/>,
    <Route key="register" path="/register" element={<Register />}/>
]