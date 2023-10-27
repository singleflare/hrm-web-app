import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Welcome from './Components/Welcome'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import EmployeeList from './Components/EmployeeList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Welcome />
    <Header />
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/employees' element={<EmployeeList />}/>
        <Route path='/about' element={<h1>All rights reserved</h1>}>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
