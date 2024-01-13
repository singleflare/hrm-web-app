import React from "react"
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
  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message) // Hello world!
} 
catch (err) {
  console.error(err);
} 
finally {
  await client.end()
}

const EmployeeList=()=>{
  return(
    <div>
      <ul className="EmpList">
        <li className="EmpItem">An item</li>
        <li className="EmpItem">A second item</li>
      </ul>
    </div>
    
  )
}
export default EmployeeList