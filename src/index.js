import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import myRoutes from './routes'

import TopNavBar from './Components/TopNavBar';

import { Client } from 'pg'
const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'employees',
  user: 'admin',
  password: 'dong2002'
})
await client.connect()
 
try {
  console.log('Connected')
  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message) // Hello world!
} 
catch (err) {
  console.error(err);
} 
finally {
  await client.end()
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TopNavBar />
      <Routes>
        {myRoutes}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
