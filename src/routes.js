/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Route} from 'react-router-dom'

import EmployeeList from './Components/EmployeeList'
import Welcome from './Components/Welcome'
import About from './Components/About'

export default[
    <Route path="/" element={Welcome}/>,
    <Route path="/employees" element={EmployeeList}/>,
    <Route path="/about" element={About}/>,
]